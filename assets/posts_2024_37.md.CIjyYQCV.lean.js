import{_ as s,c as e,a5 as t,o as n}from"./chunks/framework.HlDq-tuG.js";const k=JSON.parse('{"title":"Deno React Hono","description":"Deno React Hono Start","frontmatter":{"date":"2024-10-17T00:00:00.000Z","title":"Deno React Hono","description":"Deno React Hono Start","tags":["Deno","React","Hono"],"prev":{"text":"Npm Package Manager","link":"./36"},"next":false},"headers":[],"relativePath":"posts/2024/37.md","filePath":"posts/2024/37.md"}'),i={name:"posts/2024/37.md"};function p(l,a,o,c,d,r){return n(),e("div",null,a[0]||(a[0]=[t(`<h1 id="deno-react-hono" tabindex="-1">Deno React　Hono <a class="header-anchor" href="#deno-react-hono" aria-label="Permalink to &quot;Deno React　Hono&quot;">​</a></h1><h2 id="react" tabindex="-1">React <a class="header-anchor" href="#react" aria-label="Permalink to &quot;React&quot;">​</a></h2><ul><li><a href="https://docs.deno.com/runtime/tutorials/how_to_with_npm/react/" target="_blank" rel="noreferrer">Build a React App</a></li></ul><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-wQf5M" id="tab-BFRNYVt" checked><label data-title="deno" for="tab-BFRNYVt">deno</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">deno</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm:create-vite@latest</span></span></code></pre></div></div></div><h2 id="directory-structure" tabindex="-1">Directory Structure <a class="header-anchor" href="#directory-structure" aria-label="Permalink to &quot;Directory Structure&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>└── react</span></span>
<span class="line"><span>    ├── deno.lock</span></span>
<span class="line"><span>    ├── index.html</span></span>
<span class="line"><span>    ├── package.json</span></span>
<span class="line"><span>    ├── public</span></span>
<span class="line"><span>    │   └── vite.svg</span></span>
<span class="line"><span>    ├── src</span></span>
<span class="line"><span>    │   ├── App.css</span></span>
<span class="line"><span>    │   ├── App.tsx</span></span>
<span class="line"><span>    │   ├── assets</span></span>
<span class="line"><span>    │   │   └── react.svg</span></span>
<span class="line"><span>    │   ├── index.css</span></span>
<span class="line"><span>    │   ├── main.tsx</span></span>
<span class="line"><span>    │   └── vite-env.d.ts</span></span>
<span class="line"><span>    └── vite.config.ts</span></span></code></pre></div><h2 id="start" tabindex="-1">Start <a class="header-anchor" href="#start" aria-label="Permalink to &quot;Start&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> react</span></span></code></pre></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Z4XRb" id="tab-n21z4uz" checked><label data-title="deno" for="tab-n21z4uz">deno</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">deno</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> task</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div></div></div><h2 id="accesse-browser" tabindex="-1">Accesse Browser <a class="header-anchor" href="#accesse-browser" aria-label="Permalink to &quot;Accesse Browser&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>http://localhost:5173/</span></span></code></pre></div><h2 id="hono" tabindex="-1">Hono <a class="header-anchor" href="#hono" aria-label="Permalink to &quot;Hono&quot;">​</a></h2><ul><li><a href="https://hono.dev/docs/getting-started/deno" target="_blank" rel="noreferrer">Deno Hono</a></li></ul><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-0EvJ3" id="tab-W21pKqx" checked><label data-title="deno" for="tab-W21pKqx">deno</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">deno</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -A</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm:create-hono</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hono</span></span></code></pre></div></div></div><h2 id="directory-structure-1" tabindex="-1">Directory Structure <a class="header-anchor" href="#directory-structure-1" aria-label="Permalink to &quot;Directory Structure&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.</span></span>
<span class="line"><span>└── hono</span></span>
<span class="line"><span>    ├── deno.json</span></span>
<span class="line"><span>    ├── deno.lock</span></span>
<span class="line"><span>    ├── main.ts</span></span>
<span class="line"><span>    └── README.md</span></span></code></pre></div><h2 id="start-1" tabindex="-1">Start <a class="header-anchor" href="#start-1" aria-label="Permalink to &quot;Start&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> hono</span></span></code></pre></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-vascA" id="tab-UK0HIA2" checked><label data-title="deno" for="tab-UK0HIA2">deno</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">deno</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> task</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span></span></code></pre></div></div></div><h2 id="accesse-browser-1" tabindex="-1">Accesse Browser <a class="header-anchor" href="#accesse-browser-1" aria-label="Permalink to &quot;Accesse Browser&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>http://localhost:8000/</span></span></code></pre></div>`,21)]))}const u=s(i,[["render",p]]);export{k as __pageData,u as default};
