const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

if ("scrollRestoration" in history) history.scrollRestoration = "manual";
window.scrollTo(0, 0);

const translations = {
  es: {
    pageTitle: "Dither Lab — Dithering instantáneo",
    pageDescription: "Convierte tus imágenes en arte con dithering directamente en tu navegador.",
    brandHome: "Dither Lab, inicio",
    localProcessing: "PROCESADO LOCAL",
    newImage: "Nueva imagen",
    controlsLabel: "Controles de dithering",
    styleEyebrow: "01 / ESTILO",
    headline: "Hazla de puntos.",
    subheadline: "Elige cómo quieres romper los píxeles.",
    algorithm: "Algoritmo",
    floydDesc: "Clásico y detallado",
    atkinsonDesc: "Limpio y contrastado",
    bayerDesc: "Trama geométrica",
    stuckiDesc: "Suave y granular",
    sierraDesc: "Ligero y definido",
    bayer8Desc: "Trama fina ordenada",
    palette: "Paleta",
    paletteAria: "Paleta de color",
    monoTitle: "Blanco y negro",
    originalColorTitle: "Color original",
    adaptiveTitle: "Paleta automática de 8 colores",
    inkTitle: "Tinta",
    cyanotypeTitle: "Cianotipo",
    fireTitle: "Fuego",
    neonTitle: "Neón",
    rubyTitle: "Rubí",
    violetTitle: "Ultravioleta",
    monoLabel: "Mono",
    originalColorLabel: "Original",
    adaptiveLabel: "Auto 8",
    inkLabel: "Tinta",
    oliveLabel: "Oliva",
    cyanLabel: "Cian",
    fireLabel: "Fuego",
    neonLabel: "Neón",
    rubyLabel: "Rubí",
    violetLabel: "Ultra",
    adjustments: "Ajustes",
    dotSize: "Tamaño de punto",
    contrast: "Contraste",
    brightness: "Brillo",
    strength: "Intensidad",
    invertTones: "Invertir tonos",
    invertHelp: "Cambia luces por sombras",
    previewLabel: "Vista previa",
    resultEyebrow: "02 / RESULTADO",
    viewMode: "Modo de vista",
    original: "Original",
    compare: "Comparar",
    result: "Resultado",
    resetSettings: "Restablecer ajustes",
    startHere: "EMPIEZA AQUÍ",
    dropTitle1: "Suelta una imagen",
    dropTitle2: "y observa la magia.",
    dropDescription: "Arrastra tu archivo aquí o selecciónalo desde tu equipo.",
    chooseImage: "Elegir imagen",
    tryDemo: "o probar con una demo",
    fileHint: "JPG, PNG, WEBP · hasta 30 MB",
    compareAria: "Comparar original y resultado",
    originalUpper: "ORIGINAL",
    processing: "Procesando",
    download: "Descargar PNG",
    preparing: "Preparando...",
    invalidFile: "Ese archivo no parece una imagen compatible.",
    tooLarge: "La imagen supera el límite de 30 MB.",
    readError: "No pude leer esa imagen. Prueba con otro archivo.",
    settingsReset: "Ajustes restablecidos",
    pngError: "No pude generar el PNG en este navegador.",
    nativeReady: "PNG listo para guardar o compartir",
    nativeError: "No pude abrir el selector para guardar.",
    pngReady: "PNG listo · {width} × {height} px",
    demoFileName: "paisaje-demo.png",
    nativeShareTitle: "Imagen creada con Dither Lab",
    nativeShareDialog: "Guardar o compartir PNG"
  },
  en: {
    pageTitle: "Dither Lab — Instant image dithering",
    pageDescription: "Turn images into dithered artwork directly in your browser.",
    brandHome: "Dither Lab, home",
    localProcessing: "LOCAL PROCESSING",
    newImage: "New image",
    controlsLabel: "Dithering controls",
    styleEyebrow: "01 / STYLE",
    headline: "Make it dots.",
    subheadline: "Choose how you want to break the pixels.",
    algorithm: "Algorithm",
    floydDesc: "Classic and detailed",
    atkinsonDesc: "Clean and punchy",
    bayerDesc: "Geometric pattern",
    stuckiDesc: "Smooth and granular",
    sierraDesc: "Light and crisp",
    bayer8Desc: "Fine ordered pattern",
    palette: "Palette",
    paletteAria: "Color palette",
    monoTitle: "Black and white",
    originalColorTitle: "Original image colors",
    adaptiveTitle: "Automatic 8-color palette",
    inkTitle: "Ink",
    cyanotypeTitle: "Cyanotype",
    fireTitle: "Fire",
    neonTitle: "Neon",
    rubyTitle: "Ruby",
    violetTitle: "Ultraviolet",
    monoLabel: "Mono",
    originalColorLabel: "Original",
    adaptiveLabel: "Auto 8",
    inkLabel: "Ink",
    oliveLabel: "Olive",
    cyanLabel: "Cyan",
    fireLabel: "Fire",
    neonLabel: "Neon",
    rubyLabel: "Ruby",
    violetLabel: "Ultra",
    adjustments: "Adjustments",
    dotSize: "Dot size",
    contrast: "Contrast",
    brightness: "Brightness",
    strength: "Strength",
    invertTones: "Invert tones",
    invertHelp: "Swap highlights and shadows",
    previewLabel: "Preview",
    resultEyebrow: "02 / RESULT",
    viewMode: "View mode",
    original: "Original",
    compare: "Compare",
    result: "Result",
    resetSettings: "Reset settings",
    startHere: "START HERE",
    dropTitle1: "Drop an image",
    dropTitle2: "and watch it transform.",
    dropDescription: "Drag your file here or choose it from your device.",
    chooseImage: "Choose image",
    tryDemo: "or try the demo",
    fileHint: "JPG, PNG, WEBP · up to 30 MB",
    compareAria: "Compare original and result",
    originalUpper: "ORIGINAL",
    processing: "Processing",
    download: "Download PNG",
    preparing: "Preparing...",
    invalidFile: "That file does not look like a supported image.",
    tooLarge: "The image exceeds the 30 MB limit.",
    readError: "I could not read that image. Try another file.",
    settingsReset: "Settings reset",
    pngError: "I could not generate the PNG in this browser.",
    nativeReady: "PNG ready to save or share",
    nativeError: "I could not open the save dialog.",
    pngReady: "PNG ready · {width} × {height} px",
    demoFileName: "landscape-demo.png",
    nativeShareTitle: "Image created with Dither Lab",
    nativeShareDialog: "Save or share PNG"
  }
};

function getInitialLanguage() {
  try {
    const saved = localStorage.getItem("ditherLabLanguage");
    if (saved === "es" || saved === "en") return saved;
  } catch {
    // Local storage can be unavailable in private browser contexts.
  }
  return "es";
}

function t(key, values = {}) {
  const template = translations[state.language]?.[key] ?? translations.es[key] ?? key;
  return template.replace(/\{(\w+)\}/g, (_, name) => values[name] ?? `{${name}}`);
}

const palettes = {
  mono: ["#11110f", "#f1efe7"],
  ink: ["#242119", "#756f5e", "#c7bda5", "#f2ead9"],
  gameboy: ["#27351e", "#536b2e", "#91a84f", "#cadc9f"],
  cyan: ["#062f45", "#176585", "#70b7b5", "#d1f3e8"],
  fire: ["#27111a", "#7d2636", "#e94f37", "#ffd166"],
  vapor: ["#241734", "#2e80a3", "#f26ac0", "#fdf0d5"],
  ruby: ["#17090c", "#6f1825", "#e34b4b", "#ffe0d2"],
  violet: ["#190d29", "#51277a", "#a36bd1", "#f0ddff"]
};

const defaults = {
  algorithm: "bayer",
  palette: "mono",
  pixelSize: 2,
  contrast: 110,
  brightness: 0,
  strength: 100,
  invert: false
};

const state = {
  language: getInitialLanguage(),
  source: null,
  isDemo: false,
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
  downloadLabel: $("#downloadLabel"),
  resetButton: $("#resetButton"),
  toast: $("#toast")
};

function applyLanguage() {
  document.documentElement.lang = state.language;
  document.title = t("pageTitle");
  $("meta[name='description']").content = t("pageDescription");

  $$('[data-i18n]').forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  $$('[data-i18n-title]').forEach((element) => {
    element.title = t(element.dataset.i18nTitle);
  });
  $$('[data-i18n-aria-label]').forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });
  $$('[data-language]').forEach((button) => {
    const active = button.dataset.language === state.language;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  if (state.source) {
    if (state.isDemo) state.fileName = t("demoFileName");
    updateLoadedMetadata();
  }
}

function setLanguage(language) {
  if (language !== "es" && language !== "en") return;
  state.language = language;
  try {
    localStorage.setItem("ditherLabLanguage", language);
  } catch {
    // The selection still applies for the current session.
  }
  applyLanguage();
}

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

const diffusionKernels = {
  floyd: { divisor: 16, points: [[1, 0, 7], [-1, 1, 3], [0, 1, 5], [1, 1, 1]] },
  atkinson: { divisor: 8, points: [[1, 0, 1], [2, 0, 1], [-1, 1, 1], [0, 1, 1], [1, 1, 1], [0, 2, 1]] },
  stucki: { divisor: 42, points: [[1, 0, 8], [2, 0, 4], [-2, 1, 2], [-1, 1, 4], [0, 1, 8], [1, 1, 4], [2, 1, 2], [-2, 2, 1], [-1, 2, 2], [0, 2, 4], [1, 2, 2], [2, 2, 1]] },
  sierra: { divisor: 4, points: [[1, 0, 2], [-1, 1, 1], [0, 1, 1]] }
};

const orderedMatrices = {
  bayer: [
    [0, 8, 2, 10],
    [12, 4, 14, 6],
    [3, 11, 1, 9],
    [15, 7, 13, 5]
  ],
  bayer8: [
    [0, 32, 8, 40, 2, 34, 10, 42],
    [48, 16, 56, 24, 50, 18, 58, 26],
    [12, 44, 4, 36, 14, 46, 6, 38],
    [60, 28, 52, 20, 62, 30, 54, 22],
    [3, 35, 11, 43, 1, 33, 9, 41],
    [51, 19, 59, 27, 49, 17, 57, 25],
    [15, 47, 7, 39, 13, 45, 5, 37],
    [63, 31, 55, 23, 61, 29, 53, 21]
  ]
};

function colorDistanceSquared(r, g, b, color) {
  return (r - color[0]) ** 2 + (g - color[1]) ** 2 + (b - color[2]) ** 2;
}

function closestRgbIndex(r, g, b, colors) {
  let nearest = 0;
  let distance = Infinity;
  for (let i = 0; i < colors.length; i += 1) {
    const current = colorDistanceSquared(r, g, b, colors[i]);
    if (current < distance) {
      nearest = i;
      distance = current;
    }
  }
  return nearest;
}

function extractAdaptivePalette(data, settings, colorCount = 8) {
  const pixelCount = data.length / 4;
  const stride = Math.max(1, Math.floor(pixelCount / 2048));
  const samples = [];

  for (let i = 0; i < pixelCount; i += stride) {
    const p = i * 4;
    if (data[p + 3] < 16) continue;
    samples.push([
      adjustTone(data[p], settings.contrast, settings.brightness, settings.invert),
      adjustTone(data[p + 1], settings.contrast, settings.brightness, settings.invert),
      adjustTone(data[p + 2], settings.contrast, settings.brightness, settings.invert)
    ]);
  }

  if (!samples.length) return [[0, 0, 0], [255, 255, 255]];

  const mean = samples.reduce((total, color) => {
    total[0] += color[0];
    total[1] += color[1];
    total[2] += color[2];
    return total;
  }, [0, 0, 0]).map((value) => value / samples.length);
  const centers = [mean];

  while (centers.length < colorCount) {
    let candidate = null;
    let candidateDistance = -1;
    for (const sample of samples) {
      const distance = Math.min(...centers.map((center) => colorDistanceSquared(sample[0], sample[1], sample[2], center)));
      if (distance > candidateDistance) {
        candidate = sample;
        candidateDistance = distance;
      }
    }
    if (!candidate || candidateDistance < 16) break;
    centers.push([...candidate]);
  }

  for (let iteration = 0; iteration < 5; iteration += 1) {
    const totals = centers.map(() => [0, 0, 0, 0]);
    for (const sample of samples) {
      const index = closestRgbIndex(sample[0], sample[1], sample[2], centers);
      totals[index][0] += sample[0];
      totals[index][1] += sample[1];
      totals[index][2] += sample[2];
      totals[index][3] += 1;
    }
    totals.forEach((total, index) => {
      if (!total[3]) return;
      centers[index] = [total[0] / total[3], total[1] / total[3], total[2] / total[3]];
    });
  }

  return centers.map((color) => color.map((value) => Math.round(value)));
}

function quantizeChannel(value, levels = 4) {
  const step = 255 / (levels - 1);
  return Math.round(Math.max(0, Math.min(255, value)) / step) * step;
}

function applyColorDither(imageData, settings) {
  const { width, height, data } = imageData;
  const channelSize = width * height;
  const red = new Float32Array(channelSize);
  const green = new Float32Array(channelSize);
  const blue = new Float32Array(channelSize);
  const output = new Uint8ClampedArray(data.length);
  const adaptiveColors = settings.palette === "adaptive" ? extractAdaptivePalette(data, settings) : null;
  const orderedMatrix = orderedMatrices[settings.algorithm];
  const kernel = diffusionKernels[settings.algorithm];

  for (let i = 0; i < channelSize; i += 1) {
    const p = i * 4;
    red[i] = adjustTone(data[p], settings.contrast, settings.brightness, settings.invert);
    green[i] = adjustTone(data[p + 1], settings.contrast, settings.brightness, settings.invert);
    blue[i] = adjustTone(data[p + 2], settings.contrast, settings.brightness, settings.invert);
  }

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const index = y * width + x;
      let oldRed = red[index];
      let oldGreen = green[index];
      let oldBlue = blue[index];

      if (orderedMatrix) {
        const size = orderedMatrix.length;
        const threshold = ((orderedMatrix[y % size][x % size] + 0.5) / (size * size) - 0.5) * 72 * settings.strength;
        oldRed = Math.max(0, Math.min(255, oldRed + threshold));
        oldGreen = Math.max(0, Math.min(255, oldGreen + threshold));
        oldBlue = Math.max(0, Math.min(255, oldBlue + threshold));
      }

      const color = adaptiveColors
        ? adaptiveColors[closestRgbIndex(oldRed, oldGreen, oldBlue, adaptiveColors)]
        : [quantizeChannel(oldRed), quantizeChannel(oldGreen), quantizeChannel(oldBlue)];
      const p = index * 4;
      output[p] = color[0];
      output[p + 1] = color[1];
      output[p + 2] = color[2];
      output[p + 3] = data[p + 3];

      if (!orderedMatrix) {
        diffuse(red, width, height, x, y, oldRed - color[0], kernel.points, kernel.divisor, settings.strength);
        diffuse(green, width, height, x, y, oldGreen - color[1], kernel.points, kernel.divisor, settings.strength);
        diffuse(blue, width, height, x, y, oldBlue - color[2], kernel.points, kernel.divisor, settings.strength);
      }
    }
  }

  return new ImageData(output, width, height);
}

function applyDither(imageData, settings) {
  if (settings.palette === "original" || settings.palette === "adaptive") {
    return applyColorDither(imageData, settings);
  }

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

  const orderedMatrix = orderedMatrices[settings.algorithm];

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const index = y * width + x;
      let oldValue = values[index];

      if (orderedMatrix) {
        const size = orderedMatrix.length;
        const threshold = ((orderedMatrix[y % size][x % size] + 0.5) / (size * size) - 0.5) * 92 * settings.strength;
        oldValue = Math.max(0, Math.min(255, oldValue + threshold));
      }

      const paletteIndex = closestPaletteIndex(oldValue, levels);
      const color = colors[paletteIndex];
      const p = index * 4;
      output[p] = color[0];
      output[p + 1] = color[1];
      output[p + 2] = color[2];
      output[p + 3] = data[p + 3];

      if (!orderedMatrix) {
        const kernel = diffusionKernels[settings.algorithm];
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
  updateLoadedMetadata();
}

function updateLoadedMetadata() {
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
    showToast(t("invalidFile"), "error");
    return;
  }
  if (file.size > 30 * 1024 * 1024) {
    showToast(t("tooLarge"), "error");
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
    state.isDemo = false;
    state.fileName = file.name;
    state.fileSize = file.size;
    state.width = image.naturalWidth;
    state.height = image.naturalHeight;
    setLoadedUI();
    drawOriginal();
    scheduleRender();
  } catch {
    showToast(t("readError"), "error");
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
  state.isDemo = true;
  state.fileName = t("demoFileName");
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
  showToast(t("settingsReset"));
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
  elements.downloadLabel.textContent = t("preparing");
  await new Promise((resolve) => window.setTimeout(resolve, 20));
  const exportCanvas = document.createElement("canvas");
  const maxDimension = Math.min(4200, Math.max(state.width, state.height));
  const output = renderToCanvas(exportCanvas, maxDimension);
  exportCanvas.toBlob((blob) => {
    if (!blob) {
      elements.downloadLabel.textContent = t("download");
      elements.downloadButton.disabled = false;
      showToast(t("pngError"), "error");
      return;
    }
    const baseName = state.fileName.replace(/\.[^.]+$/, "") || "imagen";
    const fileName = `${baseName}-dither.png`;

    if (typeof window.saveNativePng === "function") {
      window.saveNativePng(blob, fileName, {
        title: t("nativeShareTitle"),
        dialogTitle: t("nativeShareDialog")
      })
        .then(() => showToast(t("nativeReady")))
        .catch(() => showToast(t("nativeError"), "error"))
        .finally(() => {
          elements.downloadLabel.textContent = t("download");
          elements.downloadButton.disabled = false;
        });
      return;
    }

    const link = document.createElement("a");
    link.download = fileName;
    link.href = URL.createObjectURL(blob);
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(link.href), 1000);
    elements.downloadLabel.textContent = t("download");
    elements.downloadButton.disabled = false;
    showToast(t("pngReady", { width: output.width, height: output.height }));
  }, "image/png");
}

elements.uploadButton.addEventListener("click", () => elements.fileInput.click());
elements.newImageButton.addEventListener("click", () => elements.fileInput.click());
elements.fileInput.addEventListener("change", (event) => loadFile(event.target.files[0]));
elements.demoButton.addEventListener("click", createDemo);
elements.resetButton.addEventListener("click", resetSettings);
elements.downloadButton.addEventListener("click", downloadResult);

$$('[data-language]').forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

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
applyLanguage();
