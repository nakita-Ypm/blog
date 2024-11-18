import{_ as a,c as t,a5 as i,o as n}from"./chunks/framework.HlDq-tuG.js";const g=JSON.parse('{"title":"Astro Starlight","description":"Astro Starlight Start","frontmatter":{"date":"2024-11-11T00:00:00.000Z","title":"Astro Starlight","description":"Astro Starlight Start","tags":["Astro"],"prev":{"text":"openapi-zod-client","link":"./48"},"next":{"text":"Hono Test","link":"./50"}},"headers":[],"relativePath":"posts/2024/49.md","filePath":"posts/2024/49.md"}'),e={name:"posts/2024/49.md"};function p(l,s,r,d,c,h){return n(),t("div",null,s[0]||(s[0]=[i(`<h1 id="astro-starlight" tabindex="-1">Astro Starlight <a class="header-anchor" href="#astro-starlight" aria-label="Permalink to &quot;Astro Starlight&quot;">​</a></h1><ul><li><p><a href="https://starlight.astro.build/" target="_blank" rel="noreferrer">Starlight</a></p></li><li><p><a href="https://github.com/withastro/starlight/tree/main/examples/basics" target="_blank" rel="noreferrer">Starlight Starter Kit: Basics</a></p></li></ul><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-wWhHX" id="tab-nzrCTOT" checked><label data-title="pnpm" for="tab-nzrCTOT">pnpm</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> astro@latest</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --template</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> starlight</span></span></code></pre></div></div></div><h2 id="directory-structure" tabindex="-1">Directory Structure <a class="header-anchor" href="#directory-structure" aria-label="Permalink to &quot;Directory Structure&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>├── astro.config.mjs</span></span>
<span class="line"><span>├── package.json</span></span>
<span class="line"><span>├── public</span></span>
<span class="line"><span>│   └── favicon.svg</span></span>
<span class="line"><span>├── README.md</span></span>
<span class="line"><span>├── src</span></span>
<span class="line"><span>│   ├── assets</span></span>
<span class="line"><span>│   │   └── houston.webp</span></span>
<span class="line"><span>│   └── content</span></span>
<span class="line"><span>│       ├── config.ts</span></span>
<span class="line"><span>│       └── docs</span></span>
<span class="line"><span>│           ├── guides</span></span>
<span class="line"><span>│           │   └── example.md</span></span>
<span class="line"><span>│           ├── index.mdx</span></span>
<span class="line"><span>│           └── reference</span></span>
<span class="line"><span>│               └── example.md</span></span>
<span class="line"><span>└── tsconfig.json</span></span></code></pre></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-C3u2F" id="tab-OJSC1mE" checked><label data-title="sh" for="tab-OJSC1mE">sh</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div></div></div><h2 id="accesse-browser" tabindex="-1">Accesse Browser <a class="header-anchor" href="#accesse-browser" aria-label="Permalink to &quot;Accesse Browser&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>http://localhost:4321/</span></span></code></pre></div><h2 id="tailwind-css" tabindex="-1">Tailwind CSS <a class="header-anchor" href="#tailwind-css" aria-label="Permalink to &quot;Tailwind CSS&quot;">​</a></h2><ul><li><a href="https://starlight.astro.build/guides/css-and-tailwind/#tailwind-css" target="_blank" rel="noreferrer">Tailwind CSS</a></li></ul><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-jknPO" id="tab-sJRRxJd" checked><label data-title="pnpm" for="tab-sJRRxJd">pnpm</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @astrojs/starlight-tailwind</span></span></code></pre></div></div></div>`,11)]))}const k=a(e,[["render",p]]);export{g as __pageData,k as default};