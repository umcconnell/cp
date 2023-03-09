export const slugify = (text) =>
    text
        .toString()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "")
        .replace(/--+/g, "-");

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

export function showCopyForm(header_controls, copy_form) {
    header_controls.setAttribute("hidden", "");
    copy_form.removeAttribute("hidden");
}

export function closeCopyForm(header_controls, copy_form) {
    copy_form_input.value = "";
    copy_form.setAttribute("hidden", "");
    header_controls.removeAttribute("hidden");
}

export function toggleLineWrap(
    editor,
    toggle_line_wrap,
    line_wrap_icon,
    line_no_wrap_icon
) {
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
