import{_ as i,c as a,a5 as e,o as t}from"./chunks/framework.HlDq-tuG.js";const o=JSON.parse('{"title":"Bun Vue","description":"Bun Vue Start","frontmatter":{"date":"2024-08-09T00:00:00.000Z","title":"Bun Vue","description":"Bun Vue Start","tags":["Bun","Vue"],"prev":{"text":"Bun Svelte","link":"./12"},"next":{"text":"Svelte","link":"./14"}},"headers":[],"relativePath":"posts/2024/13.md","filePath":"posts/2024/13.md"}'),n={name:"posts/2024/13.md"};function p(l,s,h,k,d,r){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="bun-vue" tabindex="-1">Bun Vue <a class="header-anchor" href="#bun-vue" aria-label="Permalink to &quot;Bun Vue&quot;">​</a></h1><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-52r5O" id="tab-EGvUk8q" checked><label data-title="bun" for="tab-EGvUk8q">bun</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vite@latest</span></span></code></pre></div></div></div><p> <code>Vue</code>、<code>TypeScript</code>を選択。</p><p> <code>3003</code>portを使用する。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-pRgSH" id="tab-EFJuNDH" checked><label data-title="vite.config.ts" for="tab-EFJuNDH">vite.config.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineConfig } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vite&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> defaultPort</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3003</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> port</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PORT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> !==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> undefined</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ?</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> parseInt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(process.env.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PORT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> defaultPort</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// https://vitejs.dev/config/</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  server: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    port,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  plugins: [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div></div></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-OKZ8u" id="tab-xRmnt0r" checked><label data-title="bun" for="tab-xRmnt0r">bun</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bun</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div></div></div><h2 id="accesse-browser" tabindex="-1">Accesse Browser <a class="header-anchor" href="#accesse-browser" aria-label="Permalink to &quot;Accesse Browser&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>http://localhost:3003</span></span></code></pre></div>`,8)]))}const g=i(n,[["render",p]]);export{o as __pageData,g as default};