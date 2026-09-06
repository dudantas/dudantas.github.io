import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { runInNewContext } from "node:vm";

const component = readFileSync(new URL("../src/components/ThemeScript.astro", import.meta.url), "utf8");
const scriptMatch = component.match(/<script is:inline>([\s\S]*?)<\/script>/);
assert.ok(scriptMatch, "ThemeScript.astro must contain an inline bootstrap script");
const script = scriptMatch[1];

class ThemeButton {
  constructor(theme) {
    this.attributes = new Map([["data-theme-option", theme]]);
  }
  getAttribute(name) { return this.attributes.get(name) ?? null; }
  setAttribute(name, value) { this.attributes.set(name, value); }
  closest(selector) { return selector === "button[data-theme-option]" ? this : null; }
}

function createPage({ saved = null, systemDark = false, blockedStorage = false, ready = false } = {}) {
  const listeners = new Map();
  const systemListeners = new Map();
  const root = { dataset: {}, style: {} };
  const pickers = [{ hidden: true }, { hidden: true }];
  const buttons = ["light", "dark", "light", "dark"].map((theme) => new ThemeButton(theme));
  const storage = new Map(saved === null ? [] : [["portfolio-theme", saved]]);
  const systemTheme = {
    matches: systemDark,
    addEventListener: (name, callback) => systemListeners.set(name, callback)
  };
  const document = {
    documentElement: root,
    readyState: ready ? "complete" : "loading",
    querySelectorAll(selector) {
      if (this.readyState === "loading") return [];
      return selector === "[data-theme-option]" ? buttons : pickers;
    },
    addEventListener: (name, callback) => listeners.set(name, callback)
  };
  const window = {
    matchMedia: (query) => {
      assert.equal(query, "(prefers-color-scheme: dark)");
      return systemTheme;
    },
    localStorage: {
      getItem(key) {
        if (blockedStorage) throw new Error("Storage unavailable");
        return storage.get(key) ?? null;
      },
      setItem(key, value) {
        if (blockedStorage) throw new Error("Storage unavailable");
        storage.set(key, value);
      }
    }
  };

  runInNewContext(script, { document, window, Element: ThemeButton });
  return {
    root, buttons, pickers, storage,
    ready() {
      document.readyState = "complete";
      listeners.get("DOMContentLoaded")?.();
    },
    choose(theme) { listeners.get("click")({ target: new ThemeButton(theme) }); },
    clickOutside() { listeners.get("click")({ target: {} }); },
    setSystemDark(value) {
      systemTheme.matches = value;
      systemListeners.get("change")();
    }
  };
}

test("saved choice is applied in the head before controls exist", () => {
  const page = createPage({ saved: "light", systemDark: true });
  assert.equal(page.root.dataset.theme, "light");
  assert.equal(page.root.style.colorScheme, "light");
  assert.ok(page.pickers.every((picker) => picker.hidden));
  page.ready();
  assert.ok(page.pickers.every((picker) => !picker.hidden));
  assert.deepEqual(page.buttons.map((button) => button.getAttribute("aria-pressed")), ["true", "false", "true", "false"]);
});

test("first visit follows the system until the visitor chooses a theme", () => {
  const page = createPage();
  assert.equal(page.root.dataset.theme, "light");
  page.ready();
  page.setSystemDark(true);
  assert.equal(page.root.dataset.theme, "dark");
  page.choose("light");
  page.setSystemDark(true);
  assert.equal(page.root.dataset.theme, "light");
});

test("both controls stay synchronized and a later page restores the choice", () => {
  const page = createPage({ ready: true });
  page.choose("dark");
  assert.equal(page.storage.get("portfolio-theme"), "dark");
  assert.deepEqual(page.buttons.map((button) => button.getAttribute("aria-pressed")), ["false", "true", "false", "true"]);
  const nextPage = createPage({ saved: page.storage.get("portfolio-theme"), systemDark: false });
  assert.equal(nextPage.root.dataset.theme, "dark");
});

test("invalid stored values fall back to the system without being applied", () => {
  const page = createPage({ saved: "sepia", systemDark: true });
  assert.equal(page.root.dataset.theme, "dark");
  page.setSystemDark(false);
  assert.equal(page.root.dataset.theme, "light");
});

test("blocked storage does not prevent selection or overwrite it on system changes", () => {
  const page = createPage({ blockedStorage: true, systemDark: true, ready: true });
  assert.equal(page.root.dataset.theme, "dark");
  page.choose("light");
  page.setSystemDark(true);
  assert.equal(page.root.dataset.theme, "light");
  assert.equal(page.root.style.colorScheme, "light");
  assert.equal(page.storage.size, 0);
});

test("unrelated clicks and unsupported theme values do not change preference", () => {
  const page = createPage({ saved: "dark", ready: true });
  page.clickOutside();
  page.choose("sepia");
  assert.equal(page.root.dataset.theme, "dark");
  assert.equal(page.storage.get("portfolio-theme"), "dark");
});

test("theme bootstrap remains inside the document head", () => {
  const layout = readFileSync(new URL("../src/layouts/BaseLayout.astro", import.meta.url), "utf8");
  const bootstrap = layout.indexOf("<ThemeScript />");
  assert.ok(bootstrap > layout.indexOf("<head>"));
  assert.ok(bootstrap < layout.indexOf("</head>"));
});
