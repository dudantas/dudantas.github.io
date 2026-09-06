import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("every public page has an English and Brazilian Portuguese route", () => {
  const pages = [
    ["index", "HomePage"],
    ["services", "ServicesPage"],
    ["about", "AboutPage"],
    ["contact", "ContactPage"]
  ];

  for (const [route, component] of pages) {
    const fileName = route === "index" ? "index.astro" : `${route}.astro`;
    const english = read(`src/pages/${fileName}`);
    const portuguese = read(`src/pages/pt-br/${fileName}`);

    assert.match(english, new RegExp(`<${component} locale="en" \\/>`));
    assert.match(portuguese, new RegExp(`<${component} locale="pt-BR" \\/>`));
  }
});

test("Portuguese case-study coverage matches the complete English set", () => {
  const english = read("src/data/portfolio/work.ts");
  const portuguese = read("src/data/portfolio/locales/pt-br/work.ts");
  const englishIds = [...english.matchAll(/^    id: "([^"]+)",$/gm)].map((match) => match[1]);
  const portugueseIds = [...portuguese.matchAll(/^  "([^"]+)": \{$/gm)].map((match) => match[1]);

  assert.ok(englishIds.length > 0);
  assert.deepEqual(portugueseIds.sort(), englishIds.sort());
  assert.match(portuguese, /Missing pt-BR case-study translation/);
});

test("essential positioning, custom software, and NDA copy are localized", () => {
  const profile = read("src/data/portfolio/locales/pt-br/profile.ts");
  const services = read("src/data/portfolio/locales/pt-br/services.ts");
  const work = read("src/data/portfolio/locales/pt-br/work.ts");

  assert.match(profile, /Engenheiro de Software C\+\+ Sênior/);
  assert.match(profile, /Idioma/);
  assert.match(services, /Desenvolvimento de Software sob Demanda/);
  assert.match(services, /aplicações, APIs, integrações, automações e ferramentas internas/);
  assert.match(work, /A maior parte do meu trabalho para clientes é confidencial/);
  assert.match(work, /acordos de não divulgação \(NDAs\)/);
});

test("localized pages expose canonical and language-alternate metadata", () => {
  const layout = read("src/layouts/BaseLayout.astro");
  const picker = read("src/components/LocalePicker.astro");

  assert.match(layout, /rel="canonical"/);
  assert.match(layout, /hreflang="x-default"/);
  assert.match(layout, /property="og:locale"/);
  assert.match(picker, /<a[\s\S]*data-locale-option/);
  assert.match(picker, /aria-current=/);
});

test("AI experience is explicit and machine-readable without identifying a client", () => {
  const layout = read("src/layouts/BaseLayout.astro");
  const englishProfile = read("src/data/portfolio/profile.ts");
  const englishCapabilities = read("src/data/portfolio/capabilities.ts");
  const portugueseProfile = read("src/data/portfolio/locales/pt-br/profile.ts");
  const portugueseCapabilities = read("src/data/portfolio/locales/pt-br/capabilities.ts");

  assert.match(layout, /type="application\/ld\+json"/);
  assert.match(layout, /"@type": "Person"/);
  assert.match(layout, /knowsAbout: profile\.expertise/);
  assert.match(layout, /skills: profile\.expertise/);
  assert.match(englishCapabilities, /Artificial Intelligence \(AI\) for Software Engineering/);
  assert.match(englishProfile, /code-model training support/);
  assert.match(portugueseCapabilities, /Inteligência Artificial \(IA\) para Engenharia de Software/);
  assert.match(portugueseProfile, /apoio ao treinamento de modelos de código/);
});
