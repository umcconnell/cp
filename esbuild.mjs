import * as esbuild from "esbuild";
import fs from "fs/promises";
import { minify } from "html-minifier";

let env = process.env.NODE_ENV || "production";

const config = {
    outdir: "dist/scripts",
    sourcemap: env == "production" ? false : true,
    minify: env == "production" ? true : false,
    drop: env == "production" ? ["console"] : [],
    define: { this: "globalThis" },
    platform: "browser",
};

await esbuild.build({
    ...config,
    entryPoints: ["scripts/lzma/lzma.js", "scripts/ui.js"],
    format: "esm",
    bundle: true,
    splitting: true,
    chunkNames: "chunks/[name]-[hash]",
});

await esbuild.build({
    ...config,
    entryPoints: ["scripts/lzma/lzma_worker.js"],
    bundle: false,
    outdir: "dist/scripts/lzma",
});

await esbuild.build({
    entryPoints: ["styles/main.css", "styles/normalize.css"],
    bundle: true,
    minify: env == "production" ? true : false,
    outdir: "dist/styles",
});

if (env == "production") {
    const path = "dist/index.html";
    const stdin = await fs.readFile(path, { encoding: "utf-8" });
    const minified = minify(stdin, {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        removeComments: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeOptionalTags: true,
        minifyJS: true,
        minifyCSS: true,
    });
    await fs.writeFile(path, minified);
}
