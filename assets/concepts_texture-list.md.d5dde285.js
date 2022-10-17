import{_ as s,c as n,a,w as r,e,r as o,o as i,d as l}from"./404.md.28326229.js";const k='{"title":"texture_list.json","description":"","frontmatter":{"title":"texture_list.json"},"headers":[{"level":2,"title":"General Overview","slug":"general-overview"},{"level":2,"title":"What textures can be used in the file?","slug":"what-textures-can-be-used-in-the-file"},{"level":2,"title":"File Structure","slug":"file-structure"},{"level":2,"title":"Automating","slug":"automating"}],"relativePath":"concepts/texture-list.md"}',u={},c=e('<h2 id="general-overview" tabindex="-1">General Overview <a class="header-anchor" href="#general-overview" aria-hidden="true">#</a></h2><p>The <code>texture_list</code> file is Minecraft&#39;s way of <em>caching</em> each texture so that it can retrieve it faster than looking through each image in your textures folder. This is especially important when you have an abundance of textures, where Minecraft could potentially mess up and swap textures or even not load them at all. Minecraft tends to throw a content log <em>warning</em> if you don&#39;t have the textures listed in the file. You can ignore it if you have a small amount, but it is recommended that you list the textures anyway.</p><h2 id="what-textures-can-be-used-in-the-file" tabindex="-1">What textures can be used in the file? <a class="header-anchor" href="#what-textures-can-be-used-in-the-file" aria-hidden="true">#</a></h2><p>Any texture! Any textures can and <em>should</em> be used in the texture_list.json file for best practice and performance.</p><h2 id="file-structure" tabindex="-1">File Structure <a class="header-anchor" href="#file-structure" aria-hidden="true">#</a></h2><p>The structure is simple. The file itself is in <code>RP/textures</code> and is named <code>texture_list.json</code>. The file includes the file path to every texture you want in the file:</p>',6),p=l("RP/textures/texture_list.json"),d=e(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">[</span>
	<span class="token string">&quot;textures/blocks/foo&quot;</span><span class="token punctuation">,</span>
	<span class="token string">&quot;textures/blocks/bar&quot;</span><span class="token punctuation">,</span>

	<span class="token string">&quot;textures/items/foo&quot;</span><span class="token punctuation">,</span>
	<span class="token string">&quot;textures/items/bar&quot;</span><span class="token punctuation">,</span>

	<span class="token string">&quot;textures/models/foo&quot;</span><span class="token punctuation">,</span>
	<span class="token string">&quot;textures/models/bar&quot;</span><span class="token punctuation">,</span>

	<span class="token string">&quot;textures/entity/foo&quot;</span><span class="token punctuation">,</span>
	<span class="token string">&quot;textures/entity/bar&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="automating" tabindex="-1">Automating <a class="header-anchor" href="#automating" aria-hidden="true">#</a></h2><p>If you have a lot of textures, this could obviously be tedious to go and list all the texture paths. In this case you can start to use <a href="https://bedrock-oss.github.io/regolith/" target="_blank" rel="noopener noreferrer">Regolith</a> with its wonderful filters.</p>`,3);function h(b,_,m,f,x,g){const t=o("CodeHeader");return i(),n("div",null,[c,a(t,null,{default:r(()=>[p]),_:1}),d])}var w=s(u,[["render",h]]);export{k as __pageData,w as default};
