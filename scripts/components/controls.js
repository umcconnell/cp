import { editor } from "./editor/editor";
import { about_dialog } from "./dialog";

export function setTheme(darkTheme, theme_darkmode_icon, theme_lightmode_icon) {
    if (darkTheme) {
        document.body.classList.add("dark");
        theme_darkmode_icon.setAttribute("hidden", "");
        theme_lightmode_icon.removeAttribute("hidden");
    } else {
        document.body.classList.remove("dark");
        theme_darkmode_icon.removeAttribute("hidden");
        theme_lightmode_icon.setAttribute("hidden", "");
    }
}

export const lang_select = document.getElementById("select-languages");
export const tabsize_select = document.getElementById("select-tabsize");
export const compression_select = document.getElementById("select-compression");

export const toggle_line_wrap = document.getElementById("toggle-line-wrap");
const line_wrap_icon = document.getElementById("line-wrap-icon");
const line_no_wrap_icon = document.getElementById("line-no-wrap-icon");

let curr_theme_is_light = true;
export const theme_select = document.getElementById("select-theme");
const theme_darkmode_icon = document.getElementById("select-darkmode-icon");
const theme_lightmode_icon = document.getElementById("select-lightmode-icon");

const edit_link = document.getElementById("edit-link");
const about_link = document.getElementById("about-link");

export const darkThemePreference = window.matchMedia(
    "(prefers-color-scheme: dark)",
);
curr_theme_is_light = !darkThemePreference.matches;

setTheme(
    darkThemePreference.matches,
    theme_darkmode_icon,
    theme_lightmode_icon,
);

// Event listeners
lang_select.addEventListener(
    "change",
    async () => await editor.changeLanguage(lang_select.value),
);

tabsize_select.addEventListener("change", () =>
    editor.changeTabSize(tabsize_select.value),
);

theme_select.addEventListener("click", () => {
    console.debug("Got 'change' event on theme_select");

    editor.changeTheme(curr_theme_is_light);
    setTheme(curr_theme_is_light, theme_darkmode_icon, theme_lightmode_icon);
    curr_theme_is_light = !curr_theme_is_light;
});

darkThemePreference.addEventListener("change", (e) => {
    console.debug("Changed user theme preference");
    console.debug(e);

    editor.changeTheme(e.matches);
    setTheme(e.matches, theme_darkmode_icon, theme_lightmode_icon);
    curr_theme_is_light = !e.matches;
});

toggleLineWrap();
toggle_line_wrap.addEventListener("click", () => {
    editor.toggleWrap();
    toggleLineWrap();
});

function toggleLineWrap() {
    console.debug(toggle_line_wrap);
    if (editor.wrap) {
        toggle_line_wrap.classList.add("active");
        line_wrap_icon.removeAttribute("hidden");
        line_no_wrap_icon.setAttribute("hidden", "");
    } else {
        toggle_line_wrap.classList.remove("active");
        line_wrap_icon.setAttribute("hidden", "");
        line_no_wrap_icon.removeAttribute("hidden");
    }
}

edit_link.addEventListener("click", (e) => {
    e.preventDefault();
    window.open(location.href.replace("?embedded", "").replace("embedded", ""));
    return false;
});
about_link.addEventListener("click", (e) => {
    e.preventDefault();
    about_dialog.showModal();
    return false;
});
