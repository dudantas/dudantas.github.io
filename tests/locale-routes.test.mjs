import assert from "node:assert/strict";
import test from "node:test";

import {
  alternateLocale,
  getLocaleFromPath,
  isLocale,
  localizePath,
  stripLocalePrefix
} from "../src/i18n/routes.ts";

test("english paths remain unprefixed", () => {
  assert.equal(localizePath("/", "en"), "/");
  assert.equal(localizePath("/services", "en"), "/services");
  assert.equal(localizePath("/pt-br/contact#brief", "en"), "/contact#brief");
});

test("portuguese paths receive one locale prefix", () => {
  assert.equal(localizePath("/", "pt-BR"), "/pt-br");
  assert.equal(localizePath("/services", "pt-BR"), "/pt-br/services");
  assert.equal(localizePath("/pt-br/about", "pt-BR"), "/pt-br/about");
  assert.equal(localizePath("/#featured-work", "pt-BR"), "/pt-br#featured-work");
});

test("fragment, query, relative, and external references are not rewritten", () => {
  for (const href of ["#engagements", "?ref=portfolio", "privacy", "https://example.com", "mailto:hello@example.com", "//example.com/path"]) {
    assert.equal(localizePath(href, "pt-BR"), href);
  }
});

test("locale detection accepts only supported locale contracts", () => {
  assert.equal(getLocaleFromPath("/contact"), "en");
  assert.equal(getLocaleFromPath("/pt-br"), "pt-BR");
  assert.equal(getLocaleFromPath("/pt-BR/contact"), "pt-BR");
  assert.equal(stripLocalePrefix("/pt-br/services"), "/services");
  assert.equal(alternateLocale("en"), "pt-BR");
  assert.equal(alternateLocale("pt-BR"), "en");
  assert.equal(isLocale("pt-BR"), true);
  assert.equal(isLocale("es"), false);
});
