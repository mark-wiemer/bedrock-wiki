import{_ as e,c as o,o as i,e as t}from"./404.md.28326229.js";const f='{"title":"Format Versions","description":"","frontmatter":{"title":"Format Versions","category":"Extra","prefix":"e. ","nav_order":5},"headers":[{"level":2,"title":"Why do format versions exist?","slug":"why-do-format-versions-exist"},{"level":2,"title":"Experimental Format Versions","slug":"experimental-format-versions"},{"level":2,"title":"Format Version is not Game Version","slug":"format-version-is-not-game-version"},{"level":2,"title":"Format Version Fixing","slug":"format-version-fixing"},{"level":2,"title":"Picking a Format Version","slug":"picking-a-format-version"},{"level":2,"title":"Format Versions per Asset Type","slug":"format-versions-per-asset-type"},{"level":3,"title":"Resource Pack","slug":"resource-pack"},{"level":3,"title":"Behavior Pack","slug":"behavior-pack"}],"relativePath":"guide/format-version.md"}',r={},s=t('<p>Format versions are an important part of Minecraft: Bedrock Edition&#39;s Addon System. They appear at the top of most files, formatted like this: <code>&quot;format_version&quot;: &quot;1.16.100&quot;</code>. You can think of this as the &quot;version number&quot; of the file, and the number you select here is really important! The format version you select will define which syntax and features are available to you, in that particular file.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Selecting the wrong format version is a common source of errors. When troubleshooting, people may ask you questions like &#39;what format version is your item&#39;. Ensure that you know how to answer that question.</p></div><h2 id="why-do-format-versions-exist" tabindex="-1">Why do format versions exist? <a class="header-anchor" href="#why-do-format-versions-exist" aria-hidden="true">#</a></h2><p>Format versions exist to <em>version</em> the Addon system, and allow Mincraft to introduce new features into the addon system, without breaking old Addons. For example, a <code>1.8.0</code> format version RP Entity file has very different syntax than a <code>1.10.0</code> format version RP Entity file. By using the &#39;format_version&#39; key in the json <em>you</em> can decide which version you want to use.</p><p>By using format versions <em>per file</em>, Minecraft gives you a lot of control over how your addon will be interpreted by the game. It is completely possible and expected to mix different format versions in your addon.</p><h2 id="experimental-format-versions" tabindex="-1">Experimental Format Versions <a class="header-anchor" href="#experimental-format-versions" aria-hidden="true">#</a></h2><p>Format versions are also used for the purpose of versioning experimental features. Since Minecraft releases bedrock experiments directly into stable, some format versions will be &#39;locked&#39; under experimental, unless you toggle the correct experiment.</p><p>A well known example is the item/blocks system, where <code>1.16.100</code> denotes experimental, and <code>1.10.0</code> denotes stable. If you want to make an item, it&#39;s important to select a format version early, as it will effect everything else you add to the files.</p><h2 id="format-version-is-not-game-version" tabindex="-1">Format Version is not Game Version <a class="header-anchor" href="#format-version-is-not-game-version" aria-hidden="true">#</a></h2><p>It is really important to understand that format version is <em>per subsystem</em>, and is generally not equal to the base game version. This simply means that every type of file (item, rp entity, bp entity, recipe) will use a different versioning system.</p><p>For example: <code>&quot;format_version&quot;: &quot;1.8.0&quot;</code> in an RP entity file means &quot;use version <code>1.8.0</code> of the <em>item system</em>&quot;. It does <em>not</em> mean &quot;use version <code>1.8.0</code> of the <em>addon system</em>&quot;.</p><p>For this reason, some file types will have very &quot;old&quot; format versions. Do not be tempted to replace this version with the latest game version, such as <code>1.17.0</code>.</p><h2 id="format-version-fixing" tabindex="-1">Format Version Fixing <a class="header-anchor" href="#format-version-fixing" aria-hidden="true">#</a></h2><p>Minecraft has a system that will &quot;fix&quot; your format version if you&#39;ve written it wrong. This system isn&#39;t well understood, isn&#39;t enabled for all systems, and shouldn&#39;t be relied upon. But it&#39;s important to note that an incorrect format version will often &quot;regress&quot; downwards until it hits a valid format version. For example a <code>1.11.0</code> RP entity file will simply be interpreted as <code>1.10.0</code>, and cause no errors.</p><p>This system is useful, as it means you are less likely to generate a broken file, by selecting the wrong format version.</p><h2 id="picking-a-format-version" tabindex="-1">Picking a Format Version <a class="header-anchor" href="#picking-a-format-version" aria-hidden="true">#</a></h2><p>Generally speaking, there is a cool tricky to pick the correct format version, for any file type.</p><p>For example, imagine you are creating a Recipe file:</p><ol><li>Install the <a href="/guide/download-packs.html">Vanilla Packs</a>.</li><li>Look at some recipe files, to judge which format version is most used, or the most recent</li><li>Use this format version in your file</li></ol><p>This simple trick will help you select a valid format version for your file.</p><h2 id="format-versions-per-asset-type" tabindex="-1">Format Versions per Asset Type <a class="header-anchor" href="#format-versions-per-asset-type" aria-hidden="true">#</a></h2><p>This section will list the format versions used in the vanilla game, alongside how many times it appears.</p><ul><li>The &#39;\u2B50&#39; is the recommended <em>stable</em> version.</li><li>The &#39;\u{1F680}&#39; is the recommended <em>experimental</em> version, where applicable.</li></ul><h3 id="resource-pack" tabindex="-1">Resource Pack <a class="header-anchor" href="#resource-pack" aria-hidden="true">#</a></h3><p><strong>Entity</strong>:</p><ul><li><code>1.10.0</code> : 82 \u2B50</li><li><code>1.8.0</code> : 74</li></ul><p><strong>Animation Controller</strong>:</p><ul><li><code>1.10.0</code> : 56 \u2B50</li></ul><p><strong>Animation</strong>:</p><ul><li><code>1.8.0</code> : 120</li><li><code>1.10.0</code> : 6 \u2B50</li></ul><p><strong>Attachables</strong>:</p><ul><li><code>1.10.0</code> : 29 \u2B50</li><li><code>1.8.0</code> : 25</li><li><code>1.10</code> : 1</li></ul><p><strong>Models</strong>:</p><ul><li><code>1.8.0</code> : 92</li><li><code>1.12.0</code> : 19</li><li><code>1.10.0</code> : 4</li><li><code>1.16.0</code> : 7</li></ul><p><strong>Particles</strong>:</p><ul><li><code>1.10.0</code> : 131 \u2B50</li></ul><p><strong>Render Controllers</strong>:</p><ul><li><code>1.10.0</code>: 83 \u2B50</li></ul><h3 id="behavior-pack" tabindex="-1">Behavior Pack <a class="header-anchor" href="#behavior-pack" aria-hidden="true">#</a></h3><p><strong>Entities</strong>:</p><ul><li><code>1.8.0</code> : 2</li><li><code>1.16.210</code> : 1</li><li><code>1.13.0</code> : 7</li><li><code>1.16.0</code> : 58 \u2B50</li><li><code>1.16.100</code> : 3</li><li><code>1.12.0</code> : 21</li><li><code>1.17.20</code> : 7</li><li><code>1.17.10</code> : 4</li><li><code>1.10.0</code> : 1</li><li><code>1.14.0</code> : 1</li></ul><p><strong>Items</strong>:</p><ul><li><code>1.10</code> : 44 \u2B50</li><li><code>1.16.0</code> : 1</li><li><code>1.16</code> : 1</li><li><code>1.14</code> : 1</li><li><code>1.16.100</code>: 0 \u{1F680}</li></ul><p><strong>Recipes</strong>:</p><ul><li><code>1.12</code> : 991</li><li><code>1.16</code> : 194 \u2B50</li><li><code>1.14</code> : 2</li></ul><p><strong>Spawn Rules</strong>:</p><ul><li><code>1.8.0</code> : 48 \u2B50</li><li><code>1.17.0</code> : 1</li><li><code>1.11.0</code> : 1</li></ul>',47),a=[s];function n(l,d,c,m,p,h){return i(),o("div",null,a)}var v=e(r,[["render",n]]);export{f as __pageData,v as default};
