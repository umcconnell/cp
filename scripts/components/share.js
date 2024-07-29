import { lang_select, tabsize_select, compression_select } from "./controls";
import { editor, generateHash } from "./editor/editor";
import { showErrorDialog } from "./dialog";

export const slugify = (text) =>
    text
        .toString()
        .normalize("NFD")
        .replaceAll("+", "p")
        .replaceAll("#", "s")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "")
        .replace(/--+/g, "-");

export const progress_bar = document.getElementById("progress-bar");
export const on_progress = (pct) =>
    (progress_bar.style.width = 100 * pct + "%");

const share_url = document.getElementById("share-url");
const share_markdown = document.getElementById("share-markdown");
const share_embed = document.getElementById("share-embed");

const header_controls = document.getElementById("header-controls");

const copy_form = document.getElementById("copy-form");
const copy_form_input = document.getElementById("copy-form-input");
const copy_form_copy = document.getElementById("copy-form-copy");
const copy_form_cancel = document.getElementById("copy-form-cancel");

function showCopyForm() {
    header_controls.setAttribute("hidden", "");
    copy_form.removeAttribute("hidden");
}

function closeCopyForm() {
    copy_form_input.value = "";
    copy_form.setAttribute("hidden", "");
    header_controls.removeAttribute("hidden");
}

function generateUrl(hash) {
    let url = location.origin + location.pathname;
    let params = new URLSearchParams();

    if (lang_select.value != "Plain Text")
        params.append("l", slugify(lang_select.value));

    let currentTabs = parseInt(tabsize_select.value, 10);
    if (currentTabs != 4) params.append("t", currentTabs);

    if (!editor.wrap) params.append("nw", "1");

    if (params.toString() != "") url += "?" + params.toString();
    url += "#" + hash;

    return url;
}

async function generateHashFromEditor() {
    showCopyForm();
    let hash = "";
    try {
        hash = await generateHash(
            editor.rawText(),
            compression_select.value,
            on_progress,
        );
    } catch (e) {
        console.error(e);
        showErrorDialog("Could not encode document");
    } finally {
        progress_bar.style.width = "0";
        return hash;
    }
}

share_url.addEventListener("click", async () => {
    let hash = await generateHashFromEditor();
    copy_form_input.value = generateUrl(hash);
    copy_form_input.select();
});
share_markdown.addEventListener("click", async () => {
    let hash = await generateHashFromEditor();
    copy_form_input.value = "[paste](" + generateUrl(hash) + ")";
    copy_form_input.select();
});

share_embed.addEventListener("click", async () => {
    let hash = await generateHashFromEditor();
    const height =
        Math.ceil(editor.view.contentHeight) +
        document.querySelector("footer").clientHeight;

    copy_form_input.value =
        '<iframe style="border:1px solid #d0d7de" width="100%" height="' +
        height +
        '" src="' +
        generateUrl(hash) +
        '"></iframe>';
    copy_form_input.select();
});

copy_form_copy.addEventListener("click", () => {
    navigator.clipboard.writeText(copy_form_input.value);
    closeCopyForm();
});

copy_form_cancel.addEventListener("click", () => closeCopyForm());
copy_form_input.addEventListener("keydown", (e) => {
    if (e.key == "Escape") closeCopyForm();
});
