import { copyFile, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "esbuild";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const output = resolve(root, "dist-android");

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

const sourceHtml = await readFile(resolve(root, "index.html"), "utf8");
const nativeHtml = sourceHtml.replace(
  '<script src="app.js"></script>',
  '<script src="native.js"></script>'
);

if (nativeHtml === sourceHtml) {
  throw new Error("No se encontró la etiqueta de app.js en index.html");
}

await writeFile(resolve(output, "index.html"), nativeHtml, "utf8");
await copyFile(resolve(root, "styles.css"), resolve(output, "styles.css"));

await build({
  entryPoints: [resolve(root, "scripts/native-entry.js")],
  outfile: resolve(output, "native.js"),
  bundle: true,
  minify: true,
  format: "iife",
  platform: "browser",
  target: ["chrome100"]
});
