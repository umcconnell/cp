import { Editor } from "./cm";
import LZMA from "../../lzma/lzma";

const lzma = new LZMA("scripts/lzma/lzma_worker.js");
const cm_editor = document.getElementById("cm-editor");
export const editor = new Editor();

export async function initEditor(lang, tabSize, darkTheme, readOnly, wrap) {
    await editor.init(cm_editor, {
        lang,
        tabSize,
        darkTheme,
        readOnly,
        wrap,
    });
}

export async function decodeHash(hash, on_progress) {
    if (hash == undefined) hash = location.hash.substring(1);

    console.debug("Reading from hash " + hash);
    if (hash.length == 0) return "";

    let f = await fetch("data:application/octet-stream;base64," + hash);
    let blob = await f.blob();

    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            let compressed_data = Array.from(new Uint8Array(reader.result));
            lzma.decompress(
                compressed_data,
                function (plaintext, error) {
                    if (error) return reject(error);
                    resolve(plaintext);
                },
                on_progress,
            );
        });
        reader.addEventListener("error", () => reject());
        reader.readAsArrayBuffer(blob);
    });
}

export async function generateHash(plaintext, compression = 1, on_progress) {
    if (plaintext == "") return "";

    return new Promise((resolve, reject) => {
        lzma.compress(
            plaintext,
            compression,
            function (compressed, error) {
                if (error) return reject(error);

                let reader = new FileReader();
                reader.addEventListener("load", () => {
                    let base64 = reader.result.substr(
                        reader.result.indexOf(",") + 1,
                    );
                    resolve(base64);
                });
                reader.addEventListener("error", () => reject());
                reader.readAsDataURL(new Blob([new Uint8Array(compressed)]));
            },
            on_progress,
        );
    });
}
