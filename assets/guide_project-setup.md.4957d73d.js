import{_ as u}from"./chunks/content_log.7e80e559.js";import{_ as d,a as h}from"./chunks/settings_2.4ac6f573.js";import{_ as m,c as k,a,w as s,e as o,b as e,d as n,r,o as g}from"./404.md.28326229.js";var _="/assets/images/guide/project-setup/active_pack.png";const K='{"title":"Project Setup","description":"","frontmatter":{"title":"Project Setup","category":"Guide","nav_order":4,"prefix":"4. "},"headers":[{"level":2,"title":"The com.mojang folder","slug":"the-com-mojang-folder"},{"level":3,"title":"Windows","slug":"windows"},{"level":3,"title":"Android","slug":"android"},{"level":3,"title":"iOS","slug":"ios"},{"level":3,"title":"Development Packs","slug":"development-packs"},{"level":2,"title":"Your Workspace","slug":"your-workspace"},{"level":2,"title":"BP Manifest","slug":"bp-manifest"},{"level":3,"title":"Manifest Explained","slug":"manifest-explained"},{"level":3,"title":"UUID Explained","slug":"uuid-explained"},{"level":2,"title":"RP Manifest","slug":"rp-manifest"},{"level":2,"title":"Pack Icon","slug":"pack-icon"},{"level":2,"title":"Language Files","slug":"language-files"},{"level":2,"title":"Checking your Work","slug":"checking-your-work"},{"level":2,"title":"Turn on Content Log","slug":"turn-on-content-log"},{"level":2,"title":"Creating your testing world","slug":"creating-your-testing-world"},{"level":2,"title":"Your progress so far","slug":"your-progress-so-far"},{"level":2,"title":"What you have learned","slug":"what-you-have-learned"},{"level":2,"title":"Your progress so far","slug":"your-progress-so-far-1"}],"relativePath":"guide/project-setup.md"}',f={},b=o('<h2 id="the-com-mojang-folder" tabindex="-1">The com.mojang folder <a class="header-anchor" href="#the-com-mojang-folder" aria-hidden="true">#</a></h2><p>The <code>com.mojang</code> folder is a special folder where Minecraft stores data (Addons, Worlds, Player info...). Minecraft understands this location, and all files we access or create will be placed somewhere in this folder!</p><p>You should create a shortcut to the <code>com.mojang</code> folder on your Desktop or on your mobile device, so you can easily access it at any time. The exact location of the <code>com.mojang</code> folder will depend on your device OS.</p><h3 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-hidden="true">#</a></h3><p><em>Tip: You can type %appdata% into the searchbar to jump directly into the &#39;C:\\Users\\USERNAME\\AppData&#39; folder.</em></p><p><code>C:\\Users\\USERNAME\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang</code></p><h3 id="android" tabindex="-1">Android <a class="header-anchor" href="#android" aria-hidden="true">#</a></h3><p>Android 11 or older: <code>Phone &gt; games &gt; com.mojang</code></p><p>Android 12 and newer: <code>Phone &gt; Android &gt; data &gt; com.mojang.minecraftpe &gt; files &gt; games &gt; com.mojang</code></p><h3 id="ios" tabindex="-1">iOS <a class="header-anchor" href="#ios" aria-hidden="true">#</a></h3><p><code>My iDevice &gt; Minecraft &gt; games &gt; com.mojang</code></p><h3 id="development-packs" tabindex="-1">Development Packs <a class="header-anchor" href="#development-packs" aria-hidden="true">#</a></h3><p>We will develop our addon in <code>development_behavior_packs</code> and <code>development_resource_packs</code>. When you make changes within these folders, you can <em>exit and re-enter a world with the packs applied</em>, to automatically reload the content. This allows you to quickly test your addon without reloading Minecraft.</p><p><code>resource_packs</code> and <code>behavior_packs</code> on the other hand contain stable addons, including those imported via <code>.mcpack</code>. We can ignore these folders for now.</p><h2 id="your-workspace" tabindex="-1">Your Workspace <a class="header-anchor" href="#your-workspace" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Project setup is different for android and other platforms. Consider looking into our guide for android platforms.</p></div>',16),y=n("Android guide"),v=o('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>In this guide, BP refers to the folder you created in <code>development_behavior_packs</code> (&quot;the behavior pack&quot;), and RP refers to the folder you created in <code>development_resource_packs</code> (&quot;the resource pack&quot;)</p></div><p>First of all, you will need to create the proper folders in suitable locations and set up your workspace. <em>The remainder of this guide assumes you are using VSCode. You may also follow along with other editors.</em></p><p>Let&#39;s create your first add-on workspace in Visual Studio Code now.</p><ol><li>Open VSCode (<em>Visual Studio Code, the code editor</em>)</li><li>Create a folder named &quot;<code>your_pack_name_RP</code>&quot; in <code>development_resource_packs</code>. <strong>I&#39;ll refer to this folder as <code>RP</code></strong></li><li>Create a folder &quot;<code>your_pack_name_BP</code>&quot; in <code>development_behavior_packs</code>. <strong>I&#39;ll refer to this folder as <code>BP</code></strong>.</li><li>Go to <code>File &gt; Add folder to workspace...</code> and choose <code>BP</code>. Do the same with <code>RP</code>.</li><li>Press <code>File &gt; Save Workpsace as...</code> to save the workspace file to your Desktop. Whenever you&#39;re working on your addon, all you have to do is open the workspace by double-clicking, and you will get quick access to both BP and RP folders.</li></ol><h2 id="bp-manifest" tabindex="-1">BP Manifest <a class="header-anchor" href="#bp-manifest" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>In this guide, you will often be instructed to create files with specific names, placed in specific folders. If the folder doesn&#39;t exist yet, please create it!</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Wrongly named files/folders is a common source of errors. Please check your work carefully against the examples.</p></div><p>The manifest is a file that identifies your pack to Minecraft. Every pack has one manifest. A folder with a correctly formatted manifest will show up in Minecraft, and we consider this the &quot;minimal&quot; pack before we can add additional content.</p><p>Manifest files are written in <code>json</code>. If this isn&#39;t familiar to you, you can learn more about json <a href="./understanding-json.html">here</a>.</p><p>First, create a new file in your BP folder by right-clicking on the folder and selecting <code>New File</code>. Call the file <code>manifest.json</code>. To begin, you can copy paste the following code into the file.</p>',10),w=n("BP/manifest.json"),q=o(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
	<span class="token property">&quot;header&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pack.name&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pack.description&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">&quot;min_engine_version&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;modules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;data&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="manifest-explained" tabindex="-1">Manifest Explained <a class="header-anchor" href="#manifest-explained" aria-hidden="true">#</a></h3><ul><li><p>&quot;<code>format_version</code>&quot; defines what version of manifest syntax you are using. Version 2 is the most recent stable version; use it.</p></li><li><p>&quot;<code>name</code>&quot; is the name of your behavior pack. &quot;<code>description</code>&quot; will show up under it in-game. We are defining these files in &quot;code form&quot; so we can translate them later into other languages. For more information about localization, look <a href="/concepts/text-and-translations.html">here</a>.</p></li><li><p>The &quot;<code>UUID</code>&quot; field is <strong>essential</strong>, and will be discussed in more detail below.</p></li><li><p>&quot;<code>version</code>&quot; defines the version of your add-on. When you import an add-on with a newer version on a device with an older version installed, the more recent version will overwrite the older one. You don&#39;t need to change the version if you have the add-on in <code>development_*_packs</code> folders and only use them on private worlds.</p></li><li><p>&quot;<code>min_engine_version</code>&quot; defines the minimum Minecraft client version that&#39;ll be able to read your add-on.</p></li><li><p>In &quot;<code>modules</code>&quot;, the &quot;<code>type</code>&quot; is defined to be &quot;<code>data</code>&quot;. This makes your pack a <em>Behavior Pack</em>.</p></li></ul><h3 id="uuid-explained" tabindex="-1">UUID Explained <a class="header-anchor" href="#uuid-explained" aria-hidden="true">#</a></h3><p>A UUID (<em>Universally Unique Identifier</em>) identifies your pack for other programs (in this case, Minecraft) to read. It looks something like this: <code>5c830391-0937-44d6-9774-406de66b6984</code></p><p><strong>NEVER USE THE SAME UUID TWICE.</strong> You can generate your own UUIDs <a href="https://www.uuidgenerator.net/version4" target="_blank" rel="noopener noreferrer">here</a> or, if you use VSCode, you can install <a href="https://marketplace.visualstudio.com/items?itemName=netcorext.uuid-generator" target="_blank" rel="noopener noreferrer">this</a> extension. Many other tools like <em>bridge.</em> generate UUIDS automatically. Every manifest file uses two different UUIDs.</p><p>To ensure that your add-on will work correctly you should generate two new UUID&#39;s which you will paste into the BP <code>manifest.json</code> file, at each <code>&quot;...&quot;</code>. When you are finished, it should look something like this:</p><p><code>&quot;uuid&quot;: &quot;5c830391-0937-44d6-9774-406de66b6984&quot;</code></p><h2 id="rp-manifest" tabindex="-1">RP Manifest <a class="header-anchor" href="#rp-manifest" aria-hidden="true">#</a></h2><p>The next step is to create the <code>manifest.json</code> for the RP. The format for a resource-pack manifest is nearly identical to a BP manifests except that the <code>type</code> is <code>resources</code>, which marks the pack as a <em>Resource Pack</em>.</p><p>Copy the following code into your newly created <code>RP/manifest.json</code> and insert your own UUIDs.</p>`,11),P=n("RP/manifest.json"),T=o(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
	<span class="token property">&quot;header&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pack.name&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pack.description&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">&quot;min_engine_version&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;modules&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;resources&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="pack-icon" tabindex="-1">Pack Icon <a class="header-anchor" href="#pack-icon" aria-hidden="true">#</a></h2><p>The pack icon is an image file which identifies how your addon will look in-game. If you have a low-resolution square image, you can use it. Otherwise, download and use this example icon:</p>`,3),j=n("Download Image"),x=e("p",null,[n("You should place a copy of your desired image into both the RP and the BP. The image needs to be named "),e("code",null,"pack_icon.png")],-1),I=e("h2",{id:"language-files",tabindex:"-1"},[n("Language Files "),e("a",{class:"header-anchor",href:"#language-files","aria-hidden":"true"},"#")],-1),C=e("p",null,[n("The last thing to do is setup language support for your addon. You will need to create a language file for both the RP and the BP. You can learn more about how Minecraft handles localization "),e("a",{href:"/concepts/text-and-translations.html"},"here"),n(".")],-1),S=n("RP/texts/en_US.lang"),A=e("div",{class:"language-json line-numbers-mode"},[e("pre",null,[e("code",null,`pack.name=Wiki Resource Pack
pack.description=A Ghostly Guide
`)]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br")])],-1),U=n("BP/texts/en_US.lang"),R=e("div",{class:"language-json line-numbers-mode"},[e("pre",null,[e("code",null,`pack.name=Wiki Behavior Pack
pack.description=A Ghostly Guide
`)]),e("div",{class:"line-numbers-wrapper"},[e("span",{class:"line-number"},"1"),e("br"),e("span",{class:"line-number"},"2"),e("br")])],-1),B=n("RP/texts/languages.json"),W=o(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">[</span><span class="token string">&quot;en_US&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,1),D=n("BP/texts/languages.json"),V=o(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">[</span><span class="token string">&quot;en_US&quot;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="checking-your-work" tabindex="-1">Checking your Work <a class="header-anchor" href="#checking-your-work" aria-hidden="true">#</a></h2><p>If you have done everything correctly, your packs should show up in Minecraft now! If you don&#39;t see your pack, you should follow the <a href="./troubleshooting.html">troubleshooting guide.</a></p><p><img src="`+_+'" alt=""></p><h2 id="turn-on-content-log" tabindex="-1">Turn on Content Log <a class="header-anchor" href="#turn-on-content-log" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Content log is the most useful tool you have for debugging your addons. Please do not skip this step.</p></div><p><img src="'+u+'" alt=""></p><p>Content Log is an extremely important debugging tool, which you should always have on.</p><p>Turn on both content log settings in <code>settings &gt; creator</code>. This will show you any errors in your add-on when you enter a world with it applied. You can also open the content log GUI in-game by pressing <code>ctrl+h</code>. Learn more about the content log <a href="/guide/troubleshooting.html">here</a>.</p><h2 id="creating-your-testing-world" tabindex="-1">Creating your testing world <a class="header-anchor" href="#creating-your-testing-world" aria-hidden="true">#</a></h2><p>Now we create a world to test your new add-on!</p><ol><li><p>Click &quot;<strong>Create new world</strong>&quot;;</p></li><li><p>Ensure that the following settings are set.</p><p><img src="'+d+'" alt=""><img src="'+h+'" alt=""></p></li><li><p>Now activate your behavior pack, and your resource pack. You can do this by selecting the packs, and clicking &#39;apply&#39;.</p></li><li><p>Now click &#39;<strong>Create</strong>&#39;!</p></li></ol><hr><h2 id="your-progress-so-far" tabindex="-1">Your progress so far <a class="header-anchor" href="#your-progress-so-far" aria-hidden="true">#</a></h2><p><strong>Here is how your project should look, after completing this page:</strong></p><p>Remember that in future, we will represent <code>com.mojang/development_behavior_packs/guide_RP/</code> as <code>RP</code>, and <code>com.mojang/development_behavior_packs/guide_BP/</code> as <code>BP</code>.</p>',16),E=o('<h2 id="what-you-have-learned" tabindex="-1">What you have learned <a class="header-anchor" href="#what-you-have-learned" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">What you have learned:</p><ul><li>What the com.mojang folder is, where it is and what folders it contains</li><li>How to setup your workspace</li><li>What a <code>manifest.json</code> file is</li><li>How to use UUIDs</li><li>How to create an icon for your addon</li><li>What a <code>.lang</code> file is</li></ul></div><h2 id="your-progress-so-far-1" tabindex="-1">Your progress so far <a class="header-anchor" href="#your-progress-so-far-1" aria-hidden="true">#</a></h2>',3),M=e("ul",null,[e("li",null,"[x] Setup your pack"),e("li",null,"[ ] Create a custom item"),e("li",null,"[ ] Create a custom entity"),e("li",null,"[ ] Create the entity's loot, spawn rules and a custom recipe")],-1);function N(Y,F,G,L,H,O){const i=r("BButton"),t=r("CodeHeader"),p=r("WikiImage"),l=r("FolderView"),c=r("Checklist");return g(),k("div",null,[b,a(i,{link:"./project-setup-android",color:"blue"},{default:s(()=>[y]),_:1}),v,a(t,null,{default:s(()=>[w]),_:1}),q,a(t,null,{default:s(()=>[P]),_:1}),T,a(p,{src:"/assets/images/guide/project-setup/pack_icon.png",alt:"Pack Icon",pixelated:""}),a(i,{link:"/assets/images/guide/project-setup/pack_icon.png",download:"",color:"default"},{default:s(()=>[j]),_:1}),x,I,C,a(t,null,{default:s(()=>[S]),_:1}),A,a(t,null,{default:s(()=>[U]),_:1}),R,a(t,null,{default:s(()=>[B]),_:1}),W,a(t,null,{default:s(()=>[D]),_:1}),V,a(l,{paths:["com.mojang/development_resource_packs/guide_RP/manifest.json","com.mojang/development_resource_packs/guide_RP/pack_icon.png","com.mojang/development_resource_packs/guide_RP/texts/en_US.lang","com.mojang/development_resource_packs/guide_RP/texts/languages.json","com.mojang/development_behavior_packs/guide_BP/manifest.json","com.mojang/development_behavior_packs/guide_BP/pack_icon.png","com.mojang/development_behavior_packs/guide_BP/texts/en_US.lang","com.mojang/development_behavior_packs/guide_BP/texts/languages.json"]},null,8,["paths"]),E,a(c,null,{default:s(()=>[M]),_:1})])}var Q=m(f,[["render",N]]);export{K as __pageData,Q as default};
