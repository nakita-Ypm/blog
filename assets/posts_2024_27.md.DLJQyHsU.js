import{_ as n,c as p,a5 as a,b as l,w as i,a6 as h,B as d,o as t,G as o,a as k}from"./chunks/framework.HlDq-tuG.js";const F=JSON.parse('{"title":"TypeDoc","description":"TypeDoc Start","frontmatter":{"date":"2024-09-25T00:00:00.000Z","title":"TypeDoc","description":"TypeDoc Start","tags":["TypeDoc"],"prev":{"text":"Slidev Start","link":"./26"},"next":{"text":"Astro Start","link":"./28"}},"headers":[],"relativePath":"posts/2024/27.md","filePath":"posts/2024/27.md"}'),r={name:"posts/2024/27.md"};function c(g,s,y,E,u,v){const e=d("Mermaid");return t(),p("div",null,[s[1]||(s[1]=a(`<h1 id="typedoc" tabindex="-1">TypeDoc <a class="header-anchor" href="#typedoc" aria-label="Permalink to &quot;TypeDoc&quot;">​</a></h1><p> <code>TypeDoc</code>から、<code>md</code>と<code>mermaid</code>を出力する。</p><ul><li><a href="https://typedoc.org/" target="_blank" rel="noreferrer">TypeDoc</a></li></ul><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-HlDPr" id="tab-RQPVxH8" checked><label data-title="yarn" for="tab-RQPVxH8">yarn</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> typedoc</span></span></code></pre></div></div></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-HzFjr" id="tab-Yspwb-E" checked><label data-title="yarn" for="tab-Yspwb-E">yarn</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> typedoc-plugin-markdown</span></span></code></pre></div></div></div><p> <code>entryPoints</code>を指定し、mdにするファイルを指定。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-WQjWa" id="tab-_iWUQiw" checked><label data-title="typedoc.json" for="tab-_iWUQiw">typedoc.json</label></div><div class="blocks"><div class="language-json vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;entryPoints&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./**/*.ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><p> <code>--out</code>で、出力先ディレクトリを指定。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-YTyiW" id="tab-dUW0XIJ" checked><label data-title="yarn" for="tab-dUW0XIJ">yarn</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> typedoc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --plugin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> typedoc-plugin-markdown</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --out</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./docs/typedoc/</span></span></code></pre></div></div></div><h2 id="mermaid" tabindex="-1">Mermaid <a class="header-anchor" href="#mermaid" aria-label="Permalink to &quot;Mermaid&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-jHtcT" id="tab-D6CieSL" checked><label data-title="yarn" for="tab-D6CieSL">yarn</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -D</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> typedoc-plugin-mermaid</span></span></code></pre></div></div></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-aFRwh" id="tab-tHHxi2-" checked><label data-title="typedoc.json" for="tab-tHHxi2-">typedoc.json</label></div><div class="blocks"><div class="language-json vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;entryPoints&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./**/*.ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;plugin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;typedoc-plugin-mermaid&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-kNiud" id="tab-BTYpaE8" checked><label data-title="honox.ts" for="tab-BTYpaE8">honox.ts</label></div><div class="blocks"><div class="language-ts vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { OpenAPIHono } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@hono/zod-openapi&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { routes } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;../openapi&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HonoXHandler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  /**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * HonoX Handler apply</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * apply(app: OpenAPIHono)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> app</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * routes[&#39;HonoX&#39;]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * \`\`\`mermaid</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * sequenceDiagram</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   *   Client -&gt;&gt; Handler: /api/honox</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   *   Handler --&gt;&gt; Client: { message: &#39;HonoX🔥&#39; }</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   * \`\`\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  static</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> apply</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">app</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> OpenAPIHono</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">openapi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(routes[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;HonoX&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">], </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">c</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ message: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;HonoX🔥&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div><p> 以下のように、生成できます。</p><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="apply" tabindex="-1">apply() <a class="header-anchor" href="#apply" aria-label="Permalink to &quot;apply()&quot;">​</a></h3><blockquote><p><code>static</code> <strong>apply</strong>(<code>app</code>): <code>OpenAPIHono</code>&lt;<code>Env</code>, <code>object</code>, <code>&quot;/&quot;</code>&gt;</p></blockquote><p>HonoX Handler apply apply(app: OpenAPIHono)</p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><p>• <strong>app</strong>: <code>OpenAPIHono</code>&lt;<code>Env</code>, <code>object</code>, <code>&quot;/&quot;</code>&gt;</p><p>routes[&#39;HonoX&#39;]</p>`,22)),(t(),l(h,null,{default:i(()=>[o(e,{id:"mermaid-72",class:"mermaid",graph:"sequenceDiagram%0A%20%20Client%20-%3E%3E%20Handler%3A%20%2Fapi%2Fhonox%0A%20%20Handler%20--%3E%3E%20Client%3A%20%7B%20message%3A%20'HonoX%F0%9F%94%A5'%20%7D%0A"})]),fallback:i(()=>s[0]||(s[0]=[k(" Loading... ")])),_:1})),s[2]||(s[2]=a(`<h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>OpenAPIHono</code>&lt;<code>Env</code>, <code>object</code>, <code>&quot;/&quot;</code>&gt;</p><h2 id="no-markdown" tabindex="-1">No Markdown <a class="header-anchor" href="#no-markdown" aria-label="Permalink to &quot;No Markdown&quot;">​</a></h2><p> <code>out</code>で指定した、ディレクトリに<code>html</code>ファイルが作成される。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-hlcTj" id="tab-cv2c9xn" checked><label data-title="yarn" for="tab-cv2c9xn">yarn</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> typedoc</span></span></code></pre></div></div></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-NVA9E" id="tab-L5fW_Gc" checked><label data-title="typedoc.json" for="tab-L5fW_Gc">typedoc.json</label></div><div class="blocks"><div class="language-json vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;entryPoints&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./**/*.ts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;out&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./docs/typedoc/&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></div></div>`,6))])}const m=n(r,[["render",c]]);export{F as __pageData,m as default};
