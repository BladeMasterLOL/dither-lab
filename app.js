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
    customPaletteTitle: "Paleta personalizada",
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
    customPaletteLabel: "Personal",
    paletteNamePlaceholder: "Nombre de paleta",
    savedPalettesLabel: "Paletas guardadas",
    savedPalettes: "Guardadas",
    removeColor: "− Color",
    addColor: "+ Color",
    savePalette: "Guardar",
    deletePalette: "Borrar",
    adjustments: "Ajustes",
    dotSize: "Tamaño de punto",
    contrast: "Contraste",
    brightness: "Brillo",
    strength: "Intensidad",
    invertTones: "Invertir tonos",
    invertHelp: "Cambia luces por sombras",
    tools: "Herramientas",
    stylePreset: "Preset de estilo",
    presetCustom: "Manual",
    presetNewspaper: "Periódico",
    presetGameboy: "Game Boy",
    presetCyberpunk: "Cyberpunk",
    presetRetro: "Retro PC",
    cropFormat: "Formato de recorte",
    cropOriginal: "Original",
    rotation: "Rotación",
    rotateLeft: "Girar a la izquierda",
    rotateRight: "Girar a la derecha",
    preserveTransparency: "Conservar transparencia",
    transparencyHelp: "O usa un fondo sólido",
    backgroundColor: "Color de fondo",
    zoom: "Zoom",
    mobileEditorNav: "Navegación del editor",
    mobilePreview: "Vista",
    mobileStyle: "Estilo",
    mobileAdjust: "Ajustes",
    mobileTools: "Herramientas",
    openControls: "Abrir controles",
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
    before: "Antes",
    after: "Después",
    originalUpper: "ORIGINAL",
    processing: "Procesando",
    download: "Descargar PNG",
    downloadFile: "Descargar {format}",
    preparing: "Preparando...",
    invalidFile: "Ese archivo no parece una imagen compatible.",
    tooLarge: "La imagen supera el límite de 30 MB.",
    readError: "No pude leer esa imagen. Prueba con otro archivo.",
    settingsReset: "Ajustes restablecidos",
    pngError: "No pude generar el PNG en este navegador.",
    nativeReady: "PNG listo para guardar o compartir",
    nativeError: "No pude abrir el selector para guardar.",
    pngReady: "PNG listo · {width} × {height} px",
    exportError: "No pude generar el archivo en este navegador.",
    exportReady: "{format} listo · {width} × {height} px",
    demoFileName: "paisaje-demo.png",
    nativeShareTitle: "Imagen creada con Dither Lab",
    nativeShareDialog: "Guardar o compartir PNG",
    useCamera: "Usar cámara",
    previousImage: "Imagen anterior",
    nextImage: "Imagen siguiente",
    outputSizeLabel: "Tamaño de salida",
    exportFormatLabel: "Formato de exportación",
    sizeOriginal: "Tamaño original",
    downloadBatch: "Descargar lote",
    paletteSaved: "Paleta guardada",
    paletteDeleted: "Paleta eliminada",
    paletteNameRequired: "Escribe un nombre para la paleta.",
    batchReady: "{count} imágenes listas",
    batchDownloadStarted: "Descargando {count} imágenes"
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
    customPaletteTitle: "Custom palette",
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
    customPaletteLabel: "Custom",
    paletteNamePlaceholder: "Palette name",
    savedPalettesLabel: "Saved palettes",
    savedPalettes: "Saved",
    removeColor: "− Color",
    addColor: "+ Color",
    savePalette: "Save",
    deletePalette: "Delete",
    adjustments: "Adjustments",
    dotSize: "Dot size",
    contrast: "Contrast",
    brightness: "Brightness",
    strength: "Strength",
    invertTones: "Invert tones",
    invertHelp: "Swap highlights and shadows",
    tools: "Tools",
    stylePreset: "Style preset",
    presetCustom: "Manual",
    presetNewspaper: "Newspaper",
    presetGameboy: "Game Boy",
    presetCyberpunk: "Cyberpunk",
    presetRetro: "Retro PC",
    cropFormat: "Crop format",
    cropOriginal: "Original",
    rotation: "Rotation",
    rotateLeft: "Rotate left",
    rotateRight: "Rotate right",
    preserveTransparency: "Preserve transparency",
    transparencyHelp: "Or use a solid background",
    backgroundColor: "Background color",
    zoom: "Zoom",
    mobileEditorNav: "Editor navigation",
    mobilePreview: "Preview",
    mobileStyle: "Style",
    mobileAdjust: "Adjust",
    mobileTools: "Tools",
    openControls: "Open controls",
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
    before: "Before",
    after: "After",
    originalUpper: "ORIGINAL",
    processing: "Processing",
    download: "Download PNG",
    downloadFile: "Download {format}",
    preparing: "Preparing...",
    invalidFile: "That file does not look like a supported image.",
    tooLarge: "The image exceeds the 30 MB limit.",
    readError: "I could not read that image. Try another file.",
    settingsReset: "Settings reset",
    pngError: "I could not generate the PNG in this browser.",
    nativeReady: "PNG ready to save or share",
    nativeError: "I could not open the save dialog.",
    pngReady: "PNG ready · {width} × {height} px",
    exportError: "I could not generate the file in this browser.",
    exportReady: "{format} ready · {width} × {height} px",
    demoFileName: "landscape-demo.png",
    nativeShareTitle: "Image created with Dither Lab",
    nativeShareDialog: "Save or share PNG",
    useCamera: "Use camera",
    previousImage: "Previous image",
    nextImage: "Next image",
    outputSizeLabel: "Output size",
    exportFormatLabel: "Export format",
    sizeOriginal: "Original size",
    downloadBatch: "Download batch",
    paletteSaved: "Palette saved",
    paletteDeleted: "Palette deleted",
    paletteNameRequired: "Enter a name for the palette.",
    batchReady: "{count} images ready",
    batchDownloadStarted: "Downloading {count} images"
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

function readStoredJson(key, fallback) {
  try {
    const stored = JSON.parse(localStorage.getItem(key));
    return stored ?? fallback;
  } catch {
    return fallback;
  }
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
  baseSource: null,
  isDemo: false,
  fileName: "",
  fileSize: 0,
  width: 0,
  height: 0,
  originalWidth: 0,
  originalHeight: 0,
  rotation: 0,
  cropAspect: "original",
  zoom: 1,
  customColors: readStoredJson("ditherLabCustomColors", ["#11110f", "#dfff45", "#ef8354", "#f1efe7"]),
  savedPalettes: readStoredJson("ditherLabSavedPalettes", []),
  batchFiles: [],
  batchIndex: 0,
  renderTimer: null,
  objectUrl: null
};

const elements = {
  controlPanel: $(".control-panel"),
  workspace: $(".workspace"),
  fileInput: $("#fileInput"),
  cameraInput: $("#cameraInput"),
  uploadButton: $("#uploadButton"),
  cameraButton: $("#cameraButton"),
  newImageButton: $("#newImageButton"),
  demoButton: $("#demoButton"),
  dropZone: $("#dropZone"),
  previewWrap: $("#previewWrap"),
  previewStack: $("#previewStack"),
  previewFrame: $("#previewFrame"),
  originalCanvas: $("#originalCanvas"),
  resultCanvas: $("#resultCanvas"),
  resultClip: $("#resultClip"),
  compareLine: $("#compareLine"),
  compareRange: $("#compareRange"),
  compareSlider: $("#compareSlider"),
  compareControl: $("#compareControl"),
  processing: $("#processing"),
  fileMeta: $("#fileMeta"),
  fileName: $("#fileName"),
  fileDetails: $("#fileDetails"),
  batchControls: $("#batchControls"),
  batchPosition: $("#batchPosition"),
  previousImageButton: $("#previousImageButton"),
  nextImageButton: $("#nextImageButton"),
  outputDetails: $("#outputDetails"),
  viewActions: $("#viewActions"),
  workspaceFooter: $("#workspaceFooter"),
  downloadButton: $("#downloadButton"),
  downloadBatchButton: $("#downloadBatchButton"),
  downloadLabel: $("#downloadLabel"),
  outputSize: $("#outputSize"),
  exportFormat: $("#exportFormat"),
  stylePreset: $("#stylePreset"),
  cropAspect: $("#cropAspect"),
  rotateLeftButton: $("#rotateLeftButton"),
  rotateRightButton: $("#rotateRightButton"),
  preserveTransparency: $("#preserveTransparency"),
  backgroundColor: $("#backgroundColor"),
  zoom: $("#zoom"),
  zoomValue: $("#zoomValue"),
  customPaletteEditor: $("#customPaletteEditor"),
  customPaletteSwatch: $("#customPaletteSwatch"),
  customColors: $("#customColors"),
  paletteName: $("#paletteName"),
  savedPaletteSelect: $("#savedPaletteSelect"),
  addColorButton: $("#addColorButton"),
  removeColorButton: $("#removeColorButton"),
  savePaletteButton: $("#savePaletteButton"),
  deletePaletteButton: $("#deletePaletteButton"),
  resetButton: $("#resetButton"),
  mobileControlsButton: $("#mobileControlsButton"),
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
  renderSavedPalettes();
  updateDownloadLabel();
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

function persistCustomPalettes() {
  try {
    localStorage.setItem("ditherLabCustomColors", JSON.stringify(state.customColors));
    localStorage.setItem("ditherLabSavedPalettes", JSON.stringify(state.savedPalettes));
  } catch {
    // Palettes remain available for the current session.
  }
}

function updateCustomPaletteSwatch() {
  const stops = state.customColors.map((color, index) => `${color} ${(index / state.customColors.length) * 100}% ${((index + 1) / state.customColors.length) * 100}%`);
  elements.customPaletteSwatch.querySelector("span").style.background = `linear-gradient(135deg, ${stops.join(", ")})`;
}

function renderCustomColors() {
  elements.customColors.replaceChildren();
  state.customColors.forEach((color, index) => {
    const input = document.createElement("input");
    input.type = "color";
    input.value = color;
    input.setAttribute("aria-label", `${t("customPaletteLabel")} ${index + 1}`);
    input.addEventListener("input", () => {
      state.customColors[index] = input.value;
      persistCustomPalettes();
      updateCustomPaletteSwatch();
      scheduleRender();
    });
    elements.customColors.append(input);
  });
  elements.addColorButton.disabled = state.customColors.length >= 8;
  elements.removeColorButton.disabled = state.customColors.length <= 2;
  updateCustomPaletteSwatch();
}

function renderSavedPalettes() {
  const selected = elements.savedPaletteSelect.value;
  elements.savedPaletteSelect.replaceChildren();
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = t("savedPalettes");
  elements.savedPaletteSelect.append(placeholder);
  state.savedPalettes.forEach((palette) => {
    const option = document.createElement("option");
    option.value = palette.id;
    option.textContent = palette.name;
    elements.savedPaletteSelect.append(option);
  });
  if (state.savedPalettes.some((palette) => palette.id === selected)) elements.savedPaletteSelect.value = selected;
}

function updateCustomPaletteVisibility() {
  const isCustom = $("input[name='palette']:checked").value === "custom";
  elements.customPaletteEditor.hidden = !isCustom;
}

function selectCustomPalette(colors) {
  state.customColors = colors.slice(0, 8);
  $(`input[name='palette'][value='custom']`).checked = true;
  persistCustomPalettes();
  renderCustomColors();
  updateCustomPaletteVisibility();
  scheduleRender();
}

function saveCustomPalette() {
  const name = elements.paletteName.value.trim();
  if (!name) {
    showToast(t("paletteNameRequired"), "error");
    return;
  }
  const existing = state.savedPalettes.find((palette) => palette.name.toLowerCase() === name.toLowerCase());
  if (existing) {
    existing.colors = [...state.customColors];
  } else {
    state.savedPalettes.push({ id: `${Date.now()}`, name, colors: [...state.customColors] });
  }
  persistCustomPalettes();
  renderSavedPalettes();
  elements.paletteName.value = "";
  showToast(t("paletteSaved"));
}

function deleteSavedPalette() {
  const id = elements.savedPaletteSelect.value;
  if (!id) return;
  state.savedPalettes = state.savedPalettes.filter((palette) => palette.id !== id);
  persistCustomPalettes();
  renderSavedPalettes();
  showToast(t("paletteDeleted"));
}

const controlIds = ["algorithmControls", "paletteControls", "imageControls", "toolControls"];
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
    invert: $("#invert").checked,
    customColors: state.customColors.map(hexToRgb),
    preserveTransparency: elements.preserveTransparency.checked,
    backgroundColor: elements.backgroundColor.value
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
      output[p + 3] = settings.preserveTransparency ? data[p + 3] : 255;

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
  const colors = settings.palette === "custom" ? settings.customColors : palettes[settings.palette].map(hexToRgb);
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
      output[p + 3] = settings.preserveTransparency ? data[p + 3] : 255;

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

const outputPresets = {
  square: { width: 1080, height: 1080, aspect: "1:1" },
  portrait: { width: 1080, height: 1350, aspect: "4:5" },
  story: { width: 1080, height: 1920, aspect: "9:16" },
  hd: { width: 1920, height: 1080, aspect: "16:9" }
};

function parseAspect(aspect) {
  if (aspect === "original") return null;
  const [width, height] = aspect.split(":").map(Number);
  return width / height;
}

function createWorkingSource(baseSource, rotation = state.rotation, cropAspect = state.cropAspect) {
  const baseWidth = baseSource.naturalWidth || baseSource.width;
  const baseHeight = baseSource.naturalHeight || baseSource.height;
  const rotated = document.createElement("canvas");
  const swapped = rotation % 180 !== 0;
  rotated.width = swapped ? baseHeight : baseWidth;
  rotated.height = swapped ? baseWidth : baseHeight;
  const context = rotated.getContext("2d");
  context.translate(rotated.width / 2, rotated.height / 2);
  context.rotate((rotation * Math.PI) / 180);
  context.drawImage(baseSource, -baseWidth / 2, -baseHeight / 2, baseWidth, baseHeight);

  const targetAspect = parseAspect(cropAspect);
  if (!targetAspect) return rotated;

  let sourceWidth = rotated.width;
  let sourceHeight = rotated.height;
  const currentAspect = sourceWidth / sourceHeight;
  if (currentAspect > targetAspect) sourceWidth = Math.round(sourceHeight * targetAspect);
  else sourceHeight = Math.round(sourceWidth / targetAspect);

  const cropped = document.createElement("canvas");
  cropped.width = sourceWidth;
  cropped.height = sourceHeight;
  cropped.getContext("2d").drawImage(
    rotated,
    Math.round((rotated.width - sourceWidth) / 2),
    Math.round((rotated.height - sourceHeight) / 2),
    sourceWidth,
    sourceHeight,
    0,
    0,
    sourceWidth,
    sourceHeight
  );
  return cropped;
}

function rebuildWorkingSource() {
  if (!state.baseSource) return;
  state.source = createWorkingSource(state.baseSource);
  state.width = state.source.width;
  state.height = state.source.height;
  updateLoadedMetadata();
  drawOriginal();
  scheduleRender();
}

function getOutputDimensions(width = state.width, height = state.height) {
  const preset = outputPresets[elements.outputSize.value];
  return preset || fitDimensions(width, height, 4200);
}

function drawSource(context, source, width, height, settings) {
  context.clearRect(0, 0, width, height);
  if (!settings.preserveTransparency) {
    context.fillStyle = settings.backgroundColor;
    context.fillRect(0, 0, width, height);
  }
  context.drawImage(source, 0, 0, width, height);
}

function renderToCanvas(target, maxDimension = 1400, forcedDimensions = null, source = state.source) {
  const settings = getSettings();
  const sourceWidth = source.width || source.naturalWidth;
  const sourceHeight = source.height || source.naturalHeight;
  const preview = forcedDimensions || fitDimensions(sourceWidth, sourceHeight, maxDimension);
  const sampleWidth = Math.max(1, Math.round(preview.width / settings.pixelSize));
  const sampleHeight = Math.max(1, Math.round(preview.height / settings.pixelSize));
  const sample = document.createElement("canvas");
  sample.width = sampleWidth;
  sample.height = sampleHeight;
  const sampleContext = sample.getContext("2d", { willReadFrequently: true });
  drawSource(sampleContext, source, sampleWidth, sampleHeight, settings);
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
  drawSource(elements.originalCanvas.getContext("2d"), state.source, width, height, getSettings());
  elements.previewFrame.style.aspectRatio = `${width} / ${height}`;
  sizePreviewFrame();
  window.requestAnimationFrame(sizePreviewFrame);
}

function sizePreviewFrame() {
  if (!state.source || elements.previewWrap.hidden) return;
  const availableWidth = elements.previewWrap.clientWidth;
  const availableHeight = Math.max(1, elements.previewWrap.clientHeight - 44);
  if (!availableWidth || !availableHeight) return;

  const ratio = state.width / state.height;
  let width = Math.min(availableWidth, state.width);
  let height = width / ratio;

  if (height > availableHeight) {
    height = availableHeight;
    width = height * ratio;
  }

  width *= state.zoom;
  height *= state.zoom;
  elements.previewFrame.style.width = `${Math.floor(width)}px`;
  elements.previewFrame.style.height = `${Math.floor(height)}px`;
  elements.previewWrap.classList.toggle("zoomed", state.zoom > 1);
  elements.previewStack.style.maxWidth = state.zoom > 1 ? "none" : "100%";
  elements.previewStack.style.maxHeight = state.zoom > 1 ? "none" : "100%";
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
  updateBatchUI();
  updateLoadedMetadata();
}

function updateLoadedMetadata() {
  elements.fileName.textContent = state.fileName;
  elements.fileDetails.textContent = `${state.width} × ${state.height} · ${formatBytes(state.fileSize)}`;
  const exportSize = getOutputDimensions();
  elements.outputDetails.textContent = `${elements.exportFormat.value.toUpperCase()} · ${exportSize.width} × ${exportSize.height} px`;
}

function showToast(message, type = "") {
  elements.toast.textContent = message;
  elements.toast.className = `toast show ${type}`.trim();
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => { elements.toast.className = "toast"; }, 2800);
}

async function decodeFile(file) {
  const objectUrl = URL.createObjectURL(file);
  const image = new Image();
  image.decoding = "async";
  image.src = objectUrl;
  await image.decode();
  URL.revokeObjectURL(objectUrl);
  return image;
}

function resetTransformControls() {
  state.rotation = 0;
  state.cropAspect = "original";
  elements.cropAspect.value = "original";
  elements.outputSize.value = "original";
}

async function loadFile(file, { preserveTransforms = false } = {}) {
  if (!file || !file.type.startsWith("image/")) {
    showToast(t("invalidFile"), "error");
    return;
  }
  if (file.size > 30 * 1024 * 1024) {
    showToast(t("tooLarge"), "error");
    return;
  }

  try {
    const image = await decodeFile(file);
    state.baseSource = image;
    state.isDemo = false;
    state.fileName = file.name;
    state.fileSize = file.size;
    state.originalWidth = image.naturalWidth;
    state.originalHeight = image.naturalHeight;
    if (!preserveTransforms) resetTransformControls();
    state.source = createWorkingSource(image);
    state.width = state.source.width;
    state.height = state.source.height;
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

  state.baseSource = canvas;
  resetTransformControls();
  state.source = createWorkingSource(canvas);
  state.isDemo = true;
  state.fileName = t("demoFileName");
  state.fileSize = 0;
  state.originalWidth = canvas.width;
  state.originalHeight = canvas.height;
  state.width = state.source.width;
  state.height = state.source.height;
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
  elements.stylePreset.value = "custom";
  updateCustomPaletteVisibility();
  scheduleRender();
  showToast(t("settingsReset"));
}

const stylePresets = {
  newspaper: { algorithm: "bayer", palette: "mono", pixelSize: 2, contrast: 135, brightness: 5, strength: 120 },
  gameboy: { algorithm: "atkinson", palette: "gameboy", pixelSize: 3, contrast: 120, brightness: 0, strength: 100 },
  cyberpunk: { algorithm: "bayer8", palette: "vapor", pixelSize: 2, contrast: 130, brightness: 4, strength: 115 },
  retro: { algorithm: "sierra", palette: "violet", pixelSize: 3, contrast: 115, brightness: -4, strength: 95 }
};

function applyStylePreset(name) {
  const preset = stylePresets[name];
  if (!preset) return;
  $(`input[name='algorithm'][value='${preset.algorithm}']`).checked = true;
  $(`input[name='palette'][value='${preset.palette}']`).checked = true;
  Object.entries(rangeConfig).forEach(([id, config]) => {
    const input = $(`#${id}`);
    input.value = preset[id];
    $(`#${id}Value`).textContent = `${preset[id]}${config.suffix}`;
    updateRangeFill(input);
  });
  updateCustomPaletteVisibility();
  scheduleRender();
}

function updateRangeFill(input) {
  const progress = ((input.value - input.min) / (input.max - input.min)) * 100;
  input.style.setProperty("--fill", `${progress}%`);
}

function updateCompare(value) {
  elements.resultClip.style.clipPath = `inset(0 0 0 ${value}%)`;
  elements.compareLine.style.left = `${value}%`;
  elements.compareRange.value = value;
  elements.compareSlider.value = value;
}

function setMobileControlTab(group, { scroll = false } = {}) {
  $$('[data-control-group]').forEach((section) => {
    section.classList.toggle("mobile-active", section.dataset.controlGroup === group);
  });
  $$('[data-mobile-tab]').forEach((button) => {
    const active = button.dataset.mobileTab === group;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  if (scroll) elements.controlPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function updateDownloadLabel() {
  const format = elements.exportFormat?.value === "webp" ? "WebP" : "PNG";
  if (elements.downloadLabel) elements.downloadLabel.textContent = t("downloadFile", { format });
  if (state.source) updateLoadedMetadata();
}

function getExportConfig() {
  return elements.exportFormat.value === "webp"
    ? { extension: "webp", mime: "image/webp", quality: 0.92, label: "WebP" }
    : { extension: "png", mime: "image/png", quality: undefined, label: "PNG" };
}

function canvasToBlob(canvas, type, quality) {
  return new Promise((resolve) => canvas.toBlob(resolve, type, quality));
}

function triggerDownload(blob, fileName) {
  const link = document.createElement("a");
  link.download = fileName;
  link.href = URL.createObjectURL(blob);
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(link.href), 1200);
}

async function downloadResult() {
  if (!state.source) return;
  elements.downloadButton.disabled = true;
  elements.downloadLabel.textContent = t("preparing");
  await new Promise((resolve) => window.setTimeout(resolve, 20));
  const dimensions = getOutputDimensions();
  const exportCanvas = document.createElement("canvas");
  const output = renderToCanvas(exportCanvas, Math.max(dimensions.width, dimensions.height), dimensions);
  const format = getExportConfig();
  const blob = await canvasToBlob(exportCanvas, format.mime, format.quality);
  if (!blob) {
    updateDownloadLabel();
    elements.downloadButton.disabled = false;
    showToast(t("exportError"), "error");
    return;
  }
  const baseName = state.fileName.replace(/\.[^.]+$/, "") || "image";
  const fileName = `${baseName}-dither.${format.extension}`;
  if (typeof window.saveNativePng === "function") {
    try {
      await window.saveNativePng(blob, fileName, { title: t("nativeShareTitle"), dialogTitle: t("nativeShareDialog") });
    } catch {
      showToast(t("nativeError"), "error");
    }
  } else {
    triggerDownload(blob, fileName);
  }
  updateDownloadLabel();
  elements.downloadButton.disabled = false;
  showToast(t("exportReady", { format: format.label, width: output.width, height: output.height }));
}

function updateBatchUI() {
  const multiple = state.batchFiles.length > 1;
  elements.batchControls.hidden = !multiple;
  elements.downloadBatchButton.hidden = !multiple;
  elements.batchPosition.textContent = `${state.batchIndex + 1} / ${state.batchFiles.length || 1}`;
  elements.previousImageButton.disabled = state.batchIndex <= 0;
  elements.nextImageButton.disabled = state.batchIndex >= state.batchFiles.length - 1;
}

async function handleFileSelection(fileList) {
  const files = [...fileList].filter((file) => file.type.startsWith("image/") && file.size <= 30 * 1024 * 1024);
  if (!files.length) {
    showToast(t("invalidFile"), "error");
    return;
  }
  state.batchFiles = files;
  state.batchIndex = 0;
  await loadFile(files[0]);
  updateBatchUI();
  if (files.length > 1) showToast(t("batchReady", { count: files.length }));
}

async function navigateBatch(direction) {
  const nextIndex = state.batchIndex + direction;
  if (nextIndex < 0 || nextIndex >= state.batchFiles.length) return;
  state.batchIndex = nextIndex;
  await loadFile(state.batchFiles[nextIndex], { preserveTransforms: true });
  updateBatchUI();
}

async function downloadBatch() {
  if (state.batchFiles.length < 2) return;
  elements.downloadBatchButton.disabled = true;
  showToast(t("batchDownloadStarted", { count: state.batchFiles.length }));
  const format = getExportConfig();
  for (const file of state.batchFiles) {
    const image = await decodeFile(file);
    const source = createWorkingSource(image);
    const dimensions = getOutputDimensions(source.width, source.height);
    const canvas = document.createElement("canvas");
    renderToCanvas(canvas, Math.max(dimensions.width, dimensions.height), dimensions, source);
    const blob = await canvasToBlob(canvas, format.mime, format.quality);
    if (blob) triggerDownload(blob, `${file.name.replace(/\.[^.]+$/, "")}-dither.${format.extension}`);
    await new Promise((resolve) => window.setTimeout(resolve, 180));
  }
  elements.downloadBatchButton.disabled = false;
}

elements.uploadButton.addEventListener("click", () => elements.fileInput.click());
elements.cameraButton.addEventListener("click", () => elements.cameraInput.click());
elements.newImageButton.addEventListener("click", () => elements.fileInput.click());
elements.fileInput.addEventListener("change", (event) => handleFileSelection(event.target.files));
elements.cameraInput.addEventListener("change", async (event) => {
  state.batchFiles = [];
  state.batchIndex = 0;
  if (event.target.files[0]) await loadFile(event.target.files[0]);
});
elements.demoButton.addEventListener("click", () => {
  state.batchFiles = [];
  state.batchIndex = 0;
  createDemo();
  updateBatchUI();
});
elements.resetButton.addEventListener("click", resetSettings);
elements.downloadButton.addEventListener("click", downloadResult);
elements.downloadBatchButton.addEventListener("click", downloadBatch);
elements.previousImageButton.addEventListener("click", () => navigateBatch(-1));
elements.nextImageButton.addEventListener("click", () => navigateBatch(1));
elements.mobileControlsButton.addEventListener("click", () => setMobileControlTab("style", { scroll: true }));

$$('[data-mobile-tab]').forEach((button) => {
  button.addEventListener("click", () => {
    const tab = button.dataset.mobileTab;
    if (tab === "preview") {
      elements.workspace.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    setMobileControlTab(tab);
  });
});

$$('[data-language]').forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

[elements.compareRange, elements.compareSlider].forEach((input) => input.addEventListener("input", (event) => updateCompare(event.target.value)));

$$('[data-view]').forEach((button) => {
  button.addEventListener("click", () => {
    $$('[data-view]').forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    elements.previewFrame.classList.remove("view-original", "view-result");
    if (button.dataset.view !== "compare") elements.previewFrame.classList.add(`view-${button.dataset.view}`);
    elements.compareControl.hidden = button.dataset.view !== "compare";
  });
});

$$('input[name="algorithm"], input[name="palette"], #invert').forEach((input) => input.addEventListener("change", () => {
  elements.stylePreset.value = "custom";
  updateCustomPaletteVisibility();
  scheduleRender();
}));

Object.entries(rangeConfig).forEach(([id, config]) => {
  const input = $(`#${id}`);
  updateRangeFill(input);
  input.addEventListener("input", () => {
    $(`#${id}Value`).textContent = `${input.value}${config.suffix}`;
    updateRangeFill(input);
    elements.stylePreset.value = "custom";
    scheduleRender();
  });
});

elements.stylePreset.addEventListener("change", () => applyStylePreset(elements.stylePreset.value));
elements.cropAspect.addEventListener("change", () => {
  state.cropAspect = elements.cropAspect.value;
  elements.outputSize.value = "original";
  rebuildWorkingSource();
});
elements.rotateLeftButton.addEventListener("click", () => {
  state.rotation = (state.rotation + 270) % 360;
  rebuildWorkingSource();
});
elements.rotateRightButton.addEventListener("click", () => {
  state.rotation = (state.rotation + 90) % 360;
  rebuildWorkingSource();
});
elements.preserveTransparency.addEventListener("change", () => {
  elements.backgroundColor.disabled = elements.preserveTransparency.checked;
  drawOriginal();
  scheduleRender();
});
elements.backgroundColor.addEventListener("input", () => {
  drawOriginal();
  scheduleRender();
});
elements.zoom.addEventListener("input", () => {
  state.zoom = Number(elements.zoom.value) / 100;
  elements.zoomValue.textContent = `${elements.zoom.value}%`;
  updateRangeFill(elements.zoom);
  sizePreviewFrame();
});
elements.outputSize.addEventListener("change", () => {
  const preset = outputPresets[elements.outputSize.value];
  if (preset) {
    state.cropAspect = preset.aspect;
    elements.cropAspect.value = preset.aspect;
    rebuildWorkingSource();
  } else updateLoadedMetadata();
});
elements.exportFormat.addEventListener("change", updateDownloadLabel);

elements.addColorButton.addEventListener("click", () => {
  if (state.customColors.length >= 8) return;
  state.customColors.push(state.customColors[state.customColors.length - 1]);
  persistCustomPalettes();
  renderCustomColors();
  scheduleRender();
});
elements.removeColorButton.addEventListener("click", () => {
  if (state.customColors.length <= 2) return;
  state.customColors.pop();
  persistCustomPalettes();
  renderCustomColors();
  scheduleRender();
});
elements.savePaletteButton.addEventListener("click", saveCustomPalette);
elements.deletePaletteButton.addEventListener("click", deleteSavedPalette);
elements.savedPaletteSelect.addEventListener("change", () => {
  const palette = state.savedPalettes.find((item) => item.id === elements.savedPaletteSelect.value);
  if (palette) selectCustomPalette(palette.colors);
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
  if (event.dataTransfer.files.length) handleFileSelection(event.dataTransfer.files);
});

window.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "o") {
    event.preventDefault();
    elements.fileInput.click();
  }
});

new ResizeObserver(sizePreviewFrame).observe(elements.previewWrap);
renderCustomColors();
updateRangeFill(elements.zoom);
elements.backgroundColor.disabled = elements.preserveTransparency.checked;
setMobileControlTab("style");
updateCompare(50);
applyLanguage();
