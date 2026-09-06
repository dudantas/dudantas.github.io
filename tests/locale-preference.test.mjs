import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { runInNewContext } from "node:vm";

const component = readFileSync(new URL("../src/components/LocaleScript.astro", import.meta.url), "utf8");
const scriptMatch = component.match(/<script is:inline>([\s\S]*?)<\/script>/);
assert.ok(scriptMatch, "LocaleScript.astro must contain an inline bootstrap script");
const script = scriptMatch[1];

class LocaleLink {
  constructor(locale, hash = "") {
    this.attributes = new Map([["data-locale-option", locale]]);
    this.hash = hash;
  }

  getAttribute(name) { return this.attributes.get(name) ?? null; }
  closest(selector) { return selector === "a[data-locale-option]" ? this : null; }
}

function createPage({
  htmlLang = "en",
  pathname = "/",
  search = "",
  hash = "",
  saved = null,
  blockedStorage = false
} = {}) {
  const listeners = new Map();
  const replacements = [];
  const storage = new Map(saved === null ? [] : [["portfolio-locale", saved]]);
  const document = {
    documentElement: { lang: htmlLang },
    addEventListener: (name, callback) => listeners.set(name, callback)
  };
  const window = {
    location: {
      pathname,
      search,
      hash,
      replace: (href) => replacements.push(href)
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

  runInNewContext(script, { document, window, Element: LocaleLink });
  return {
    replacements,
    storage,
    choose(locale, linkHash = "") {
      const link = new LocaleLink(locale, linkHash);
      listeners.get("click")?.({ target: link });
      return link;
    },
    clickOutside() { listeners.get("click")?.({ target: {} }); }
  };
}

test("a saved Portuguese preference redirects the equivalent English route", () => {
  const page = createPage({
    pathname: "/services",
    search: "?source=portfolio",
    hash: "#engagements",
    saved: "pt-BR"
  });

  assert.deepEqual(page.replacements, ["/pt-br/services?source=portfolio#engagements"]);
});

test("the English home redirects to the Portuguese root without a trailing slash", () => {
  const page = createPage({ pathname: "/", saved: "pt-BR" });
  assert.deepEqual(page.replacements, ["/pt-br"]);
});

test("an explicit Portuguese URL is respected regardless of the saved choice", () => {
  const page = createPage({ htmlLang: "pt-BR", pathname: "/pt-br/contact", saved: "en" });
  assert.deepEqual(page.replacements, []);
});

test("missing and unsupported preferences keep English as the initial language", () => {
  assert.deepEqual(createPage().replacements, []);
  assert.deepEqual(createPage({ saved: "es" }).replacements, []);
});

test("language selection is stored and keeps the current section", () => {
  const page = createPage({ pathname: "/about", hash: "#private-work" });
  const link = page.choose("pt-BR");

  assert.equal(page.storage.get("portfolio-locale"), "pt-BR");
  assert.equal(link.hash, "#private-work");
});

test("a destination-specific section takes precedence over the current hash", () => {
  const page = createPage({ hash: "#featured-work" });
  const link = page.choose("en", "#case-studies");

  assert.equal(link.hash, "#case-studies");
  assert.equal(page.storage.get("portfolio-locale"), "en");
});

test("blocked storage and unrelated clicks leave native navigation usable", () => {
  const page = createPage({ blockedStorage: true, hash: "#brief" });
  page.clickOutside();
  const link = page.choose("pt-BR");

  assert.equal(link.hash, "#brief");
  assert.equal(page.storage.size, 0);
  assert.deepEqual(page.replacements, []);
});

test("locale bootstrap remains in the head before the theme bootstrap", () => {
  const layout = readFileSync(new URL("../src/layouts/BaseLayout.astro", import.meta.url), "utf8");
  const localeBootstrap = layout.indexOf("<LocaleScript />");
  const themeBootstrap = layout.indexOf("<ThemeScript />");

  assert.ok(localeBootstrap > layout.indexOf("<head>"));
  assert.ok(localeBootstrap < themeBootstrap);
  assert.ok(themeBootstrap < layout.indexOf("</head>"));
});
