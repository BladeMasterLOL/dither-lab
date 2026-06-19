const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

if ("scrollRestoration" in history) history.scrollRestoration = "manual";
window.scrollTo(0, 0);

const palettes = {
  mono: ["#11110f", "#f1efe7"],
  ink: ["#242119", "#756f5e", "#c7bda5", "#f2ead9"],
  gameboy: ["#27351e", "#536b2e", "#91a84f", "#cadc9f"],
  cyan: ["#062f45", "#176585", "#70b7b5", "#d1f3e8"],
  fire: ["#27111a", "#7d2636", "#e94f37", "#ffd166"]
};

const defaults = {
  algorithm: "floyd",
  palette: "mono",
  pixelSize: 2,
  contrast: 110,
  brightness: 0,
  strength: 100,
  invert: false
};

const state = {
  source: null,
  fileName: "",
  fileSize: 0,
  width: 0,
  height: 0,
  renderTimer: null,
  objectUrl: null
};

const elements = {
  fileInput: $("#fileInput"),
  uploadButton: $("#uploadButton"),
  newImageButton: $("#newImageButton"),
  demoButton: $("#demoButton"),
  dropZone: $("#dropZone"),
  previewWrap: $("#previewWrap"),
  previewFrame: $("#previewFrame"),
  originalCanvas: $("#originalCanvas"),
  resultCanvas: $("#resultCanvas"),
  resultClip: $("#resultClip"),
  compareLine: $("#compareLine"),
  compareRange: $("#compareRange"),
  processing: $("#processing"),
  fileMeta: $("#fileMeta"),
  fileName: $("#fileName"),
  fileDetails: $("#fileDetails"),
  outputDetails: $("#outputDetails"),
  viewActions: $("#viewActions"),
  workspaceFooter: $("#workspaceFooter"),
  downloadButton: $("#downloadButton"),
  resetButton: $("#resetButton"),
  toast: $("#toast")
};

const controlIds = ["algorithmControls", "paletteControls", "imageControls"];
const rangeConfig = {
  pixelSize: { suffix: " px" },
  contrast: { suffix: "%" },
  brightness: { suffix: "" },
  strength: { suffix: "%" }
};

function hexToRgb(hex) {
  const value = Number.parseInt(hex.slice(1), 16);
  return [(value >> 16) & 255, (value >> 8) & 255, value & 255];
}

function luminance([r, g, b]) {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function getSettings() {
  return {
    algorithm: $("input[name='algorithm']:checked").value,
    palette: $("input[name='palette']:checked").value,
    pixelSize: Number($("#pixelSize").value),
    contrast: Number($("#contrast").value),
    brightness: Number($("#brightness").value),
    strength: Number($("#strength").value) / 100,
    invert: $("#invert").checked
  };
}

function closestPaletteIndex(value, levels) {
  let nearest = 0;
  let distance = Infinity;
  for (let i = 0; i < levels.length; i += 1) {
    const current = Math.abs(value - levels[i]);
    if (current < distance) {
      nearest = i;
      distance = current;
    }
  }
  return nearest;
}

function adjustTone(value, contrast, brightness, invert) {
  const factor = contrast / 100;
  let adjusted = (value - 128) * factor + 128 + brightness;
  adjusted = Math.max(0, Math.min(255, adjusted));
  return invert ? 255 - adjusted : adjusted;
}

function diffuse(buffer, width, height, x, y, error, kernel, divisor, strength) {
  for (const [dx, dy, weight] of kernel) {
    const nx = x + dx;
    const ny = y + dy;
    if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
      const index = ny * width + nx;
      buffer[index] += (error * weight * strength) / divisor;
    }
  }
}

function applyDither(imageData, settings) {
  const { width, height, data } = imageData;
  const colors = palettes[settings.palette].map(hexToRgb);
  const levels = colors.map(luminance);
  const values = new Float32Array(width * height);
  const output = new Uint8ClampedArray(data.length);

  for (let i = 0; i < width * height; i += 1) {
    const p = i * 4;
    const gray = 0.2126 * data[p] + 0.7152 * data[p + 1] + 0.0722 * data[p + 2];
    values[i] = adjustTone(gray, settings.contrast, settings.brightness, settings.invert);
  }

  const kernels = {
    floyd: { divisor: 16, points: [[1, 0, 7], [-1, 1, 3], [0, 1, 5], [1, 1, 1]] },
    atkinson: { divisor: 8, points: [[1, 0, 1], [2, 0, 1], [-1, 1, 1], [0, 1, 1], [1, 1, 1], [0, 2, 1]] },
    stucki: { divisor: 42, points: [[1, 0, 8], [2, 0, 4], [-2, 1, 2], [-1, 1, 4], [0, 1, 8], [1, 1, 4], [2, 1, 2], [-2, 2, 1], [-1, 2, 2], [0, 2, 4], [1, 2, 2], [2, 2, 1]] }
  };
  const bayer = [
    [0, 8, 2, 10],
    [12, 4, 14, 6],
    [3, 11, 1, 9],
    [15, 7, 13, 5]
  ];

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const index = y * width + x;
      let oldValue = values[index];

      if (settings.algorithm === "bayer") {
        const threshold = ((bayer[y % 4][x % 4] + 0.5) / 16 - 0.5) * 92 * settings.strength;
        oldValue = Math.max(0, Math.min(255, oldValue + threshold));
      }

      const paletteIndex = closestPaletteIndex(oldValue, levels);
      const color = colors[paletteIndex];
      const p = index * 4;
      output[p] = color[0];
      output[p + 1] = color[1];
      output[p + 2] = color[2];
      output[p + 3] = data[p + 3];

      if (settings.algorithm !== "bayer") {
        const kernel = kernels[settings.algorithm];
        diffuse(values, width, height, x, y, oldValue - levels[paletteIndex], kernel.points, kernel.divisor, settings.strength);
      }
    }
  }

  return new ImageData(output, width, height);
}

function fitDimensions(width, height, maxDimension) {
  const scale = Math.min(1, maxDimension / Math.max(width, height));
  return { width: Math.max(1, Math.round(width * scale)), height: Math.max(1, Math.round(height * scale)) };
}

function renderToCanvas(target, maxDimension = 1400) {
  const settings = getSettings();
  const preview = fitDimensions(state.width, state.height, maxDimension);
  const sampleWidth = Math.max(1, Math.round(preview.width / settings.pixelSize));
  const sampleHeight = Math.max(1, Math.round(preview.height / settings.pixelSize));
  const sample = document.createElement("canvas");
  sample.width = sampleWidth;
  sample.height = sampleHeight;
  const sampleContext = sample.getContext("2d", { willReadFrequently: true });
  sampleContext.drawImage(state.source, 0, 0, sampleWidth, sampleHeight);
  const dithered = applyDither(sampleContext.getImageData(0, 0, sampleWidth, sampleHeight), settings);
  sampleContext.putImageData(dithered, 0, 0);

  target.width = preview.width;
  target.height = preview.height;
  const context = target.getContext("2d");
  context.imageSmoothingEnabled = false;
  context.clearRect(0, 0, preview.width, preview.height);
  context.drawImage(sample, 0, 0, preview.width, preview.height);
  return preview;
}

function drawOriginal() {
  const { width, height } = fitDimensions(state.width, state.height, 1400);
  elements.originalCanvas.width = width;
  elements.originalCanvas.height = height;
  elements.originalCanvas.getContext("2d").drawImage(state.source, 0, 0, width, height);
  elements.previewFrame.style.aspectRatio = `${width} / ${height}`;
  sizePreviewFrame();
  window.requestAnimationFrame(sizePreviewFrame);
}

function sizePreviewFrame() {
  if (!state.source || elements.previewWrap.hidden) return;
  const availableWidth = elements.previewWrap.clientWidth;
  const availableHeight = elements.previewWrap.clientHeight;
  if (!availableWidth || !availableHeight) return;

  const ratio = state.width / state.height;
  let width = Math.min(availableWidth, state.width);
  let height = width / ratio;

  if (height > availableHeight) {
    height = availableHeight;
    width = height * ratio;
  }

  elements.previewFrame.style.width = `${Math.floor(width)}px`;
  elements.previewFrame.style.height = `${Math.floor(height)}px`;
}

function scheduleRender() {
  if (!state.source) return;
  window.clearTimeout(state.renderTimer);
  elements.processing.hidden = false;
  state.renderTimer = window.setTimeout(() => {
    renderToCanvas(elements.resultCanvas);
    elements.processing.hidden = true;
  }, 45);
}

function formatBytes(bytes) {
  if (!bytes) return "DEMO";
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function setLoadedUI() {
  elements.dropZone.hidden = true;
  elements.previewWrap.hidden = false;
  elements.fileMeta.hidden = false;
  elements.viewActions.hidden = false;
  elements.workspaceFooter.hidden = false;
  elements.newImageButton.disabled = false;
  controlIds.forEach((id) => { $(`#${id}`).disabled = false; });
  elements.fileName.textContent = state.fileName;
  elements.fileDetails.textContent = `${state.width} × ${state.height} · ${formatBytes(state.fileSize)}`;
  const exportSize = fitDimensions(state.width, state.height, 4200);
  elements.outputDetails.textContent = `PNG · ${exportSize.width} × ${exportSize.height} px`;
}

function showToast(message, type = "") {
  elements.toast.textContent = message;
  elements.toast.className = `toast show ${type}`.trim();
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => { elements.toast.className = "toast"; }, 2800);
}

async function loadFile(file) {
  if (!file || !file.type.startsWith("image/")) {
    showToast("Ese archivo no parece una imagen compatible.", "error");
    return;
  }
  if (file.size > 30 * 1024 * 1024) {
    showToast("La imagen supera el límite de 30 MB.", "error");
    return;
  }

  try {
    if (state.objectUrl) URL.revokeObjectURL(state.objectUrl);
    state.objectUrl = URL.createObjectURL(file);
    const image = new Image();
    image.decoding = "async";
    image.src = state.objectUrl;
    await image.decode();
    state.source = image;
    state.fileName = file.name;
    state.fileSize = file.size;
    state.width = image.naturalWidth;
    state.height = image.naturalHeight;
    setLoadedUI();
    drawOriginal();
    scheduleRender();
  } catch {
    showToast("No pude leer esa imagen. Prueba con otro archivo.", "error");
  }
}

function createDemo() {
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 800;
  const context = canvas.getContext("2d");
  const sky = context.createLinearGradient(0, 0, 0, 800);
  sky.addColorStop(0, "#f2d5a0");
  sky.addColorStop(.52, "#c87562");
  sky.addColorStop(1, "#28334d");
  context.fillStyle = sky;
  context.fillRect(0, 0, 1200, 800);

  context.fillStyle = "#f6e6b4";
  context.beginPath();
  context.arc(815, 270, 115, 0, Math.PI * 2);
  context.fill();

  context.fillStyle = "#55536b";
  context.beginPath();
  context.moveTo(0, 660);
  context.lineTo(275, 365);
  context.lineTo(475, 610);
  context.lineTo(690, 385);
  context.lineTo(990, 650);
  context.lineTo(1200, 470);
  context.lineTo(1200, 800);
  context.lineTo(0, 800);
  context.fill();

  context.fillStyle = "#20273a";
  context.beginPath();
  context.moveTo(0, 720);
  context.lineTo(350, 510);
  context.lineTo(565, 700);
  context.lineTo(790, 530);
  context.lineTo(1200, 735);
  context.lineTo(1200, 800);
  context.lineTo(0, 800);
  context.fill();

  context.fillStyle = "rgba(255,255,255,.2)";
  for (let i = 0; i < 260; i += 1) {
    const x = (i * 83) % 1200;
    const y = (i * 47) % 800;
    context.fillRect(x, y, 1, 1);
  }

  state.source = canvas;
  state.fileName = "paisaje-demo.png";
  state.fileSize = 0;
  state.width = canvas.width;
  state.height = canvas.height;
  setLoadedUI();
  drawOriginal();
  scheduleRender();
}

function resetSettings() {
  $(`input[name='algorithm'][value='${defaults.algorithm}']`).checked = true;
  $(`input[name='palette'][value='${defaults.palette}']`).checked = true;
  Object.entries(rangeConfig).forEach(([id, config]) => {
    const input = $(`#${id}`);
    input.value = defaults[id];
    $(`#${id}Value`).textContent = `${defaults[id]}${config.suffix}`;
    updateRangeFill(input);
  });
  $("#invert").checked = defaults.invert;
  scheduleRender();
  showToast("Ajustes restablecidos");
}

function updateRangeFill(input) {
  const progress = ((input.value - input.min) / (input.max - input.min)) * 100;
  input.style.setProperty("--fill", `${progress}%`);
}

function updateCompare(value) {
  elements.resultClip.style.clipPath = `inset(0 0 0 ${value}%)`;
  elements.compareLine.style.left = `${value}%`;
}

async function downloadResult() {
  if (!state.source) return;
  elements.downloadButton.disabled = true;
  elements.downloadButton.firstChild.textContent = "Preparando... ";
  await new Promise((resolve) => window.setTimeout(resolve, 20));
  const exportCanvas = document.createElement("canvas");
  const maxDimension = Math.min(4200, Math.max(state.width, state.height));
  const output = renderToCanvas(exportCanvas, maxDimension);
  exportCanvas.toBlob((blob) => {
    if (!blob) {
      elements.downloadButton.firstChild.textContent = "Descargar PNG ";
      elements.downloadButton.disabled = false;
      showToast("No pude generar el PNG en este navegador.", "error");
      return;
    }
    const baseName = state.fileName.replace(/\.[^.]+$/, "") || "imagen";
    const fileName = `${baseName}-dither.png`;

    if (typeof window.saveNativePng === "function") {
      window.saveNativePng(blob, fileName)
        .then(() => showToast("PNG listo para guardar o compartir"))
        .catch(() => showToast("No pude abrir el selector para guardar.", "error"))
        .finally(() => {
          elements.downloadButton.firstChild.textContent = "Descargar PNG ";
          elements.downloadButton.disabled = false;
        });
      return;
    }

    const link = document.createElement("a");
    link.download = fileName;
    link.href = URL.createObjectURL(blob);
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(link.href), 1000);
    elements.downloadButton.firstChild.textContent = "Descargar PNG ";
    elements.downloadButton.disabled = false;
    showToast(`PNG listo · ${output.width} × ${output.height} px`);
  }, "image/png");
}

elements.uploadButton.addEventListener("click", () => elements.fileInput.click());
elements.newImageButton.addEventListener("click", () => elements.fileInput.click());
elements.fileInput.addEventListener("change", (event) => loadFile(event.target.files[0]));
elements.demoButton.addEventListener("click", createDemo);
elements.resetButton.addEventListener("click", resetSettings);
elements.downloadButton.addEventListener("click", downloadResult);

elements.compareRange.addEventListener("input", (event) => updateCompare(event.target.value));

$$('[data-view]').forEach((button) => {
  button.addEventListener("click", () => {
    $$('[data-view]').forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    elements.previewFrame.classList.remove("view-original", "view-result");
    if (button.dataset.view !== "compare") elements.previewFrame.classList.add(`view-${button.dataset.view}`);
  });
});

$$('input[name="algorithm"], input[name="palette"], #invert').forEach((input) => input.addEventListener("change", scheduleRender));

Object.entries(rangeConfig).forEach(([id, config]) => {
  const input = $(`#${id}`);
  updateRangeFill(input);
  input.addEventListener("input", () => {
    $(`#${id}Value`).textContent = `${input.value}${config.suffix}`;
    updateRangeFill(input);
    scheduleRender();
  });
});

["dragenter", "dragover"].forEach((eventName) => {
  window.addEventListener(eventName, (event) => {
    event.preventDefault();
    if (!state.source) elements.dropZone.classList.add("dragging");
  });
});

["dragleave", "drop"].forEach((eventName) => {
  window.addEventListener(eventName, (event) => {
    event.preventDefault();
    elements.dropZone.classList.remove("dragging");
  });
});

window.addEventListener("drop", (event) => {
  const file = event.dataTransfer.files[0];
  if (file) loadFile(file);
});

window.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "o") {
    event.preventDefault();
    elements.fileInput.click();
  }
});

new ResizeObserver(sizePreviewFrame).observe(elements.previewWrap);
updateCompare(50);
