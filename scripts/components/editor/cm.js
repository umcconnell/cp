import { basicSetup } from "codemirror";
import { EditorView, keymap } from "@codemirror/view";
import { EditorState, Compartment, StateEffect } from "@codemirror/state";
import { indentUnit, LanguageSupport } from "@codemirror/language";
import { languages } from "@codemirror/language-data";
import { indentWithTab } from "@codemirror/commands";

// import { oneDark } from "@codemirror/theme-one-dark";
let oneDark;

async function getDarkTheme() {
    if (oneDark != undefined) return oneDark;
    else {
        let m = await import("@codemirror/theme-one-dark");
        oneDark = m.oneDark;
        return oneDark;
    }
}

async function getLang(name) {
    name = name.toLowerCase();
    if (name == "plain text") return [];
    else
        return await languages.find((l) => l.name.toLowerCase() == name).load();
}

export const availableLangs = [
    ...languages.map((o) => o.name),
    "Plain Text",
].sort();

export class Editor {
    constructor() {
        this.compartements = {
            language: new Compartment(),
            tabSize: new Compartment(),
            theme: new Compartment(),
            readOnly: new Compartment(),
            lineWrapping: new Compartment(),
        };
        this.initState;
        this.view;
        this.wrap = true;
    }

    async init(
        el,
        {
            doc = "",
            lang = "Plain Text",
            darkTheme = false,
            tabSize = 4,
            tabChar = " ",
            readOnly = false,
            wrap = true,
        } = {}
    ) {
        // https://discuss.codemirror.net/t/dynamic-light-mode-dark-mode-how/4709
        console.debug("Initializing editor to " + el);
        this.wrap = wrap;
        this.initState = EditorState.create({
            extensions: [
                basicSetup,
                this.compartements.lineWrapping.of(
                    wrap ? EditorView.lineWrapping : []
                ),
                this.compartements.theme.of(
                    darkTheme ? await getDarkTheme() : EditorView.theme({})
                ),
                keymap.of([indentWithTab]),
                this.compartements.language.of(await getLang(lang)),
                this.compartements.tabSize.of(
                    indentUnit.of(tabChar.repeat(tabSize))
                ),
                this.compartements.readOnly.of(
                    EditorState.readOnly.of(readOnly)
                ),
            ],
        });

        this.view = new EditorView({
            state: this.initState,
            doc,
            parent: el,
        });
    }

    async changeLanguage(name) {
        console.debug("Changed language to " + name);

        this.view.dispatch({
            effects: this.compartements.language.reconfigure(
                await getLang(name)
            ),
        });
    }

    changeTabSize(tabSize, indentChar = " ") {
        console.debug("Changed tab size to " + tabSize);

        this.view.dispatch({
            effects: this.compartements.tabSize.reconfigure(
                indentUnit.of(indentChar.repeat(tabSize))
            ),
        });
    }

    async changeTheme(darkTheme = false) {
        console.debug("Changed theme to " + (darkTheme ? "dark" : "light"));

        this.view.dispatch({
            effects: this.compartements.theme.reconfigure(
                darkTheme ? await getDarkTheme() : EditorView.theme({})
            ),
        });
    }

    rawText() {
        return this.view.state.doc.toString();
    }

    setText(text) {
        this.view.dispatch({
            changes: { from: 0, to: this.view.state.doc.length, insert: text },
        });
    }

    currentLang() {
        return this.compartements.language.get(this.view.state);
    }

    toggleWrap() {
        this.wrap = !this.wrap;

        this.view.dispatch({
            effects: this.compartements.lineWrapping.reconfigure(
                this.wrap ? EditorView.lineWrapping : []
            ),
        });
    }

    makeReadOnly() {
        return this.view.dispatch({
            effects: this.compartements.readOnly.reconfigure(
                EditorState.readOnly.of(true)
            ),
        });
    }
}
