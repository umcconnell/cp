export const error_dialog = document.getElementById("error-dialog");
export const error_dialog_content = document.getElementById(
    "error-dialog-content",
);
export const about_dialog = document.getElementById("about-dialog");

function closeOnClickOutside(e, dialog) {
    const rect = dialog.getBoundingClientRect();
    const isInDialog =
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width;
    if (!isInDialog) {
        dialog.close();
    }
}

error_dialog.addEventListener("click", function (e) {
    closeOnClickOutside(e, error_dialog);
});
about_dialog.addEventListener("click", function (e) {
    closeOnClickOutside(e, about_dialog);
});

export function showErrorDialog(msg) {
    error_dialog_content.innerHTML = msg;
    error_dialog.showModal();
}
