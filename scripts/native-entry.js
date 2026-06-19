import { Directory, Filesystem } from "@capacitor/filesystem";
import { Share } from "@capacitor/share";
import "../app.js";

function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(reader.error);
    reader.onload = () => resolve(String(reader.result).split(",")[1]);
    reader.readAsDataURL(blob);
  });
}

window.saveNativePng = async (blob, fileName) => {
  const data = await blobToBase64(blob);
  const saved = await Filesystem.writeFile({
    path: fileName,
    data,
    directory: Directory.Cache
  });

  await Share.share({
    title: "Imagen creada con Dither Lab",
    text: fileName,
    url: saved.uri,
    dialogTitle: "Guardar o compartir PNG"
  });
};
