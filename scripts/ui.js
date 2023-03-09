import { availableLangs } from "./components/editor/cm.js";
import { editor, initEditor, decodeHash } from "./components/editor/editor.js";
import {
    lang_select,
    tabsize_select,
    darkThemePreference,
} from "./components/controls";
import { slugify } from "./components/share.js";
import { showErrorDialog } from "./components/dialog.js";

// TODO: Handle Ctrl+S
let url_params = new URLSearchParams(document.location.search);
console.debug(url_params);

let url_lang = url_params.get("l") || "plain-text";
if (!availableLangs.map((n) => slugify(n)).includes(url_lang))
    url_lang = "plain-text";

let url_tab = parseInt(url_params.get("t") || 4, 10);
if (!(url_tab == 1 || url_tab == 2 || url_tab == 4 || url_tab == 8))
    url_tab = 4;

let url_no_wrap = url_params.has("nw");

lang_select.innerHTML = availableLangs
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
    .map(
        (name) =>
            `<option ${
                slugify(name) == url_lang ? "selected" : ""
            }>${name}</option>`
    )
    .join("");

tabsize_select.value = url_tab;

// Editor
await initEditor(
    lang_select.value,
    tabsize_select.value,
    darkThemePreference.matches,
    document.body.classList.contains("embedded"),
    !url_no_wrap
);

decodeHash()
    .then((t) => editor.setText(t))
    .catch((e) => {
        console.error(e);
        showErrorDialog("Could not decode document");
    });

window.addEventListener("hashchange", () =>
    decodeHash()
        .then((t) => editor.setText(t))
        .catch((e) => {
            console.error(e);
            showErrorDialog("Could not decode document");
        })
);
