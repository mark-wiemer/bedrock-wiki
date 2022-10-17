import{_ as e,c as o,o as i,e as t}from"./404.md.28326229.js";const f='{"title":"Version Control","description":"","frontmatter":{"title":"Version Control"},"headers":[{"level":2,"title":"Git","slug":"git"},{"level":2,"title":"GitHub","slug":"github"},{"level":2,"title":"Vocabulary Quiz","slug":"vocabulary-quiz"},{"level":1,"title":"Setting up Git","slug":"setting-up-git"},{"level":2,"title":"Structure","slug":"structure"},{"level":2,"title":"Creating a Git Repository","slug":"creating-a-git-repository"},{"level":2,"title":"Linking your existing RP and BP","slug":"linking-your-existing-rp-and-bp"},{"level":2,"title":"Extra Files","slug":"extra-files"},{"level":2,"title":"Working with your VCS","slug":"working-with-your-vcs"}],"relativePath":"meta/version-control.md"}',a={},r=t('<p>Version control is the concept of backing up your code iteratively, so you can roll back to specific versions as needed. Version control could be achieved at the most basic level by taking a <code>.zip</code> of your addon every day and uploading it to google drive. This isn&#39;t unreasonable, but it has three significant difficulties that proper VCS (version control systems) fix:</p><ul><li>It isn&#39;t easy to compare versions</li><li>It isn&#39;t easy to <em>actually</em> roll-back to a previous version</li><li>It doesn&#39;t do anything to help in team-collaboration</li></ul><p>This tutorial will teach the basics of a tool called <code>git</code>, and a free, online git storage service called `GitHub. Anyone may follow along, but you will receive the most benefit if you are working in a team environment or often lose your work because you forget to back up.</p><p>This tutorial will not be focusing directly on teaching <code>git</code> or <code>GitHub</code>, as outside knowledge sources better do this. The focus will be on setting up these tools for Minecraft once the basics have been learned.</p><h2 id="git" tabindex="-1">Git <a class="header-anchor" href="#git" aria-hidden="true">#</a></h2><p><code>git</code> is a tool installed locally on your machine and allows you to version your files. You can <code>commit</code> changes to your files with a small message (ex. &quot;Fixed issue where dragons couldn&#39;t fly after being tamed&quot;), view the full change-list, and quickly jump back to specific changes.</p><p>Git is insanely powerful and the de-facto tool for all major programming projects. The most significant drawback for MC work is that it is <em>complicated</em>. Be patient while learning.</p><p>For a complete walkthrough of <code>git</code>, you should follow the following <a href="https://www.atlassian.com/git/tutorials/what-is-git" target="_blank" rel="noopener noreferrer">git tutorial.</a></p><h2 id="github" tabindex="-1">GitHub <a class="header-anchor" href="#github" aria-hidden="true">#</a></h2><p>GitHub is a version of your git project (<code>repository</code>) that is hosted online. This allows multiple people to work on the same project at the same time and collaborate. This is very helpful for map-making. By hosting on Github, you can also (optionally) make your code public, making it easier than ever to share your addons with the world.</p><p>For a complete walkthrough of using <code>Github</code>, you should follow this <a href="https://guides.github.com/activities/hello-world/" target="_blank" rel="noopener noreferrer">github tutorial</a>.</p><h2 id="vocabulary-quiz" tabindex="-1">Vocabulary Quiz <a class="header-anchor" href="#vocabulary-quiz" aria-hidden="true">#</a></h2><p>If you&#39;ve gotten this far, hopefully, you have a GitHub account and are familiar with <code>git</code> in a small way. The following terms will be used in this tutorial. If you don&#39;t know them, please google \u{1F603}</p><ul><li>repository</li><li>branch</li><li>commit</li><li>github</li><li>git</li></ul><h1 id="setting-up-git" tabindex="-1">Setting up Git <a class="header-anchor" href="#setting-up-git" aria-hidden="true">#</a></h1><p>This assumes you are adding an <em>existing</em> project to git. The steps are similar if you are starting from scratch.</p><h2 id="structure" tabindex="-1">Structure <a class="header-anchor" href="#structure" aria-hidden="true">#</a></h2><p>The big issue with using <code>git</code> for addons is that <code>git</code> generally works by encapsulating a <em>single</em> folder and managing it. Of course, in Bedrock Addons, assets are spread across two folders: The <code>BP</code>, and <code>RP</code>. To get around this issue, we will place our repository outside of the <code>com.mojang</code> folder entirely and then use window <code>junctions</code> to &quot;copy&quot; the folders in.</p><p>There are many advantages of placing our project in a separate location:</p><ul><li>We can include additional files as needed, such as config files, tools, notes, .bb files, etc</li><li>We can combine the RP and the BP into one repository</li><li>All of our projects can be easily viewed in a simple location, instead of nested deep within com.mojang</li></ul><h2 id="creating-a-git-repository" tabindex="-1">Creating a Git Repository <a class="header-anchor" href="#creating-a-git-repository" aria-hidden="true">#</a></h2><p>Pick a convenient location for your projects. I placed mine at <code>C:/sirlich/projects</code>. Make a new folder with the name of your map. We will be using <code>wiki</code> as the name of our mock project.</p><p>Right-click the folder, and click <code>&quot;Open git Bash&quot;</code>. If this option doesn&#39;t appear, you can open <code>git bash</code> from the start menu and navigate your project folder. If you don&#39;t have <code>git bash</code> installed, you should do so now.</p><p>Type: <code>git init</code>. This will create a blank repository in your project.</p><h2 id="linking-your-existing-rp-and-bp" tabindex="-1">Linking your existing RP and BP <a class="header-anchor" href="#linking-your-existing-rp-and-bp" aria-hidden="true">#</a></h2><p>The next step is to make the repository aware of your RP and BP folders. We will be using window symlink &quot;junctions&quot;. When we create a junction, we essentially create a wormhole in our file system that will make it appear like your files are in two places at once. Deleting/editing/adding files is perfectly copied over.</p><p>Type: <code>mklink /J wiki_RP &quot;C:/path/to/RP/in/com/mojang&quot;</code> Type: <code>mklink /J wiki_BP &quot;C:/path/to/BP/in/com/mojang&quot;</code></p><p>When you are finished, you should see <code>wiki_RP</code> and <code>wiki_BP</code> in your project folder, containing all your assets, existing files, etc.</p><p>You can now push this repository to <code>github</code>, following the tutorial above.</p><h2 id="extra-files" tabindex="-1">Extra Files <a class="header-anchor" href="#extra-files" aria-hidden="true">#</a></h2><p>Because we created our repository based on symlinks, we can add anything we like into the project folder without worrying about breaking the com.mojang folder. I like to track <code>.bb</code> files, cover-art files (<code>.kra</code> etc.).</p><p>You can also add notes, video files, or anything else you want to track.</p><h2 id="working-with-your-vcs" tabindex="-1">Working with your VCS <a class="header-anchor" href="#working-with-your-vcs" aria-hidden="true">#</a></h2><p>The main things to remember about working with VCS:</p><ul><li>Always <code>pull</code> before starting work</li><li>Commit and <code>push</code> often</li><li>Always <code>push</code> before stopping work</li><li>If you screw up your files super bad, you can always reset to the last working version. If you commit/push often, hopefully, this wasn&#39;t too long ago.</li><li>Always, and I mean <code>always</code> make good commit messages. It&#39;s vital when you have to roll back.</li></ul>',35),n=[r];function l(s,c,d,u,h,p){return i(),o("div",null,n)}var y=e(a,[["render",l]]);export{f as __pageData,y as default};
