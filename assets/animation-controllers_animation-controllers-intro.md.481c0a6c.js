import{_ as o,c as p,a,w as t,e as n,r as l,o as r,d as e}from"./404.md.28326229.js";var i="/assets/images/concepts/animation-controllers/two_state_FSM.png",c="/assets/images/concepts/animation-controllers/three_state_FSM.png";const W='{"title":"Intro to Animation Controllers","description":"","frontmatter":{"title":"Intro to Animation Controllers","nav_order":1,"tags":["guide"]},"headers":[{"level":2,"title":"What are State Machines?","slug":"what-are-state-machines"},{"level":2,"title":"State Machine example","slug":"state-machine-example"},{"level":2,"title":"What are Animation Controllers?","slug":"what-are-animation-controllers"},{"level":3,"title":"Attaching our controller to an entity","slug":"attaching-our-controller-to-an-entity"},{"level":3,"title":"RP Animation Controllers","slug":"rp-animation-controllers"},{"level":3,"title":"BP Animation Controllers","slug":"bp-animation-controllers"},{"level":2,"title":"Animation Controller example","slug":"animation-controller-example"},{"level":3,"title":"Simple Example","slug":"simple-example"},{"level":3,"title":"Full Example","slug":"full-example"},{"level":2,"title":"RP Animation Controllers","slug":"rp-animation-controllers-1"},{"level":2,"title":"BP Animation Controllers","slug":"bp-animation-controllers-1"},{"level":2,"title":"Animation Controller Flow","slug":"animation-controller-flow"},{"level":3,"title":"Loading","slug":"loading"},{"level":3,"title":"Resetting","slug":"resetting"}],"relativePath":"animation-controllers/animation-controllers-intro.md"}',u={},m=n('<p>Animation controllers (AC) are state-machines that can be used in both the resource pack, and the behavior pack. In the resource pack, animation controllers (RPAC) are used to play animations, and in the behavior pack (BPAC), they are used to play commands, and command &quot;animations&quot;.</p><h2 id="what-are-state-machines" tabindex="-1">What are State Machines? <a class="header-anchor" href="#what-are-state-machines" aria-hidden="true">#</a></h2><p>State machines are a special kind of logic management, that relies on a series of states. Each state has two properties:</p><ul><li>What to do in the current state</li><li>How to move to other states</li></ul><p>State machines are used all over the place, especially in classical programming. They aren&#39;t only found in minecraft! You can learn more about state machines <a href="https://www.itemis.com/en/yakindu/state-machine/documentation/user-guide/overview_what_are_state_machines" target="_blank" rel="noopener noreferrer">here</a>.</p><p>A state machine can only be <code>in</code> one state at a time. When a state machine &quot;runs&quot;, you can think of it as moving from state to state, executing the logic inside, and then following <code>transitions</code> to other states.</p><h2 id="state-machine-example" tabindex="-1">State Machine example <a class="header-anchor" href="#state-machine-example" aria-hidden="true">#</a></h2><p>The reason that state-machines are useful, is they allow us to naturally break up our animations into a logical flow, where each state handles its own animations <em>and</em> its own logic.</p><p>For example, imagine you want to animate the spinning blade of a helicopter - but only when on the ground. You have two states:</p><ul><li><code>ground state</code></li><li><code>flying state</code></li></ul><p>We can annotate these states with the two pieces of information described above:</p><ul><li><code>ground state</code>: <ul><li>play no animation</li><li>move to <code>flying state</code> if in the air</li></ul></li><li><code>flying state</code>: <ul><li>play flying animation</li><li>move to <code>ground state</code> if on the ground</li></ul></li></ul><p>Here is the state-machine, visualized as a flow-chart:</p><p><img src="'+i+'" alt=""></p><p>In this flowchart, states are represented by rectangles, and arrows represent <em>transitions</em> from one state to another.</p><p>Flowcharts are a nice way to visualize multi-state finite-state-machines, is it allows you to follow the logical <em>flow</em> of the animation. Let us look at a more detailed example, which adds a third <code>explode</code> state:</p><p><img src="'+c+'" alt=""></p><p>As you can see, states can go to more than one state at once. States can also be dead-ends (since the helicopter is dead, and doesn&#39;t need further animation). The branching flow of animation-controllers is a large part of what makes them powerful.</p><h2 id="what-are-animation-controllers" tabindex="-1">What are Animation Controllers? <a class="header-anchor" href="#what-are-animation-controllers" aria-hidden="true">#</a></h2><p>Animation Controllers are Minecraft state machines that allow us to play animations and run commands. Animation controllers always go under the <code>animation_controllers</code> folder, in either the RP, or the BP.</p><h3 id="attaching-our-controller-to-an-entity" tabindex="-1">Attaching our controller to an entity <a class="header-anchor" href="#attaching-our-controller-to-an-entity" aria-hidden="true">#</a></h3><p>Animation controller are defined in their own files, and must be &quot;attached&quot; to entities before they can do anything. To attach an AC into your entity, you must do two things:</p><ul><li>Define a short-name for the animation controller</li><li>Run the animation controller via <code>scripts</code></li></ul><p>Here is a sample <code>description</code>, which shows how the AC can first be defined in <code>animations</code>, and then played in <code>scripts/animate</code>.</p>',24),d=e("RP/entity/helicopter.ce.json OR BP/entities/helicopter.se.json"),b=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token property">&quot;identifier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:helicopter&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;animations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;blade_controller&quot;</span><span class="token operator">:</span> <span class="token string">&quot;controller.animation.helicopter.blade&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;animate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token string">&quot;blade_controller&quot;</span>
		<span class="token punctuation">]</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>If you want to conditionally play an animation controller, you can supply an optional molang argument. If the argument evaluates to true, the controller will play:</p>`,2),h=e("RP/entity/helicopter.ce.json OR BP/entities/helicopter.se.json"),k=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
	<span class="token property">&quot;animate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token comment">// Only play the blade_controller if the helicopter has a rider.</span>
			<span class="token property">&quot;blade_controller&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.has_rider&quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="rp-animation-controllers" tabindex="-1">RP Animation Controllers <a class="header-anchor" href="#rp-animation-controllers" aria-hidden="true">#</a></h3><p>RP animation controllers go in the RP, and can be attached to RP entities. They allow you to play bone-animations.</p><h3 id="bp-animation-controllers" tabindex="-1">BP Animation Controllers <a class="header-anchor" href="#bp-animation-controllers" aria-hidden="true">#</a></h3><p>BP animation controllers go in the BP, and can be attached to BP entities. They allow you to play commands and send events to entities.</p><h2 id="animation-controller-example" tabindex="-1">Animation Controller example <a class="header-anchor" href="#animation-controller-example" aria-hidden="true">#</a></h2><p>Lets look at a simple animation controller from our State Machine example above:</p><h3 id="simple-example" tabindex="-1">Simple Example <a class="header-anchor" href="#simple-example" aria-hidden="true">#</a></h3>`,8),_=e("RP/animation_controllers/helicopter.ac.json"),q=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.10.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;animation_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;controller.animation.helicopter.blade&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;initial_state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ground&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;states&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;ground&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token punctuation">{</span>
							<span class="token property">&quot;flying&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!query.is_on_ground&quot;</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">]</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token property">&quot;flying&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;animations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;flying&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
					<span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token punctuation">{</span>
							<span class="token property">&quot;ground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.is_on_ground&quot;</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">]</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>There is... a lot going on here. Lets break it down, step by step. As we do so, remember two things:</p><ul><li>Animation controllers are a <em>list of states</em></li><li>Each state contains two pieces of information: <em>What to do in any given state</em>, and <em>How to transition to new states</em>.</li></ul><p>So this particular example contains two states:</p><ul><li><code>ground</code></li><li><code>flying</code></li></ul><p>You can note that <code>&quot;initial_state&quot;: &quot;ground&quot;</code> means that our Animation Controller will begin in the <code>ground</code> state.</p>`,6),g=e("RP/animation_controllers/helicopter.ac.json#animation_controllers/controller.animation.helicopter.blade/states"),y=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;ground&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;flying&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!query.is_on_ground&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>The <code>ground</code> state contains a list of <em>transitions</em>, which is how we get to other states. In this example, the default state is saying: <em>Move to the <code>flying</code> state when <code>query.is_on_ground</code> is NOT true</em>. In other words - start the flying animation when we fly into the air!</p>`,2),f=e("RP/animation_controllers/helicopter.ac.json#animation_controllers/controller.animation.helicopter.blade/states"),w=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;flying&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;animations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;flying&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;ground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.is_on_ground&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>The <code>flying</code> state also contains a list of transitions. In this case it contains the opposite transition: <em>Move to the <code>ground</code> state when <code>query.is_on_ground</code> is true</em>. In other words - move back to the default state when we land on the ground!</p><p>Alongside the <code>transition</code> list, there is also a list of <code>animations</code> to play while inside of this state. In this case, playing the <code>flying</code> animation. This animation will need to be defined in the entity definition file for this entity.</p><h3 id="full-example" tabindex="-1">Full Example <a class="header-anchor" href="#full-example" aria-hidden="true">#</a></h3><p>Here is the code for the second state machine from above, with three states this time. This example illustrates a few new concepts:</p><ul><li>States with multiple transitions</li><li>States with no transitions</li></ul>`,6),v=e("RP/animation_controllers/helicopter.ac.json"),T=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.10.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;animation_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;controller.animation.helicopter.blade&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;initial_state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ground&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;states&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;ground&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token punctuation">{</span>
							<span class="token property">&quot;flying&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!query.is_on_ground&quot;</span>
						<span class="token punctuation">}</span><span class="token punctuation">,</span>
						<span class="token punctuation">{</span>
							<span class="token property">&quot;explode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!query.is_alive&quot;</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">]</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token property">&quot;flying&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;animations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;flying&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
					<span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token punctuation">{</span>
							<span class="token property">&quot;ground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.is_on_ground&quot;</span>
						<span class="token punctuation">}</span><span class="token punctuation">,</span>
						<span class="token punctuation">{</span>
							<span class="token property">&quot;explode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!query.is_alive&quot;</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">]</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token property">&quot;explode&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;animations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;explode&quot;</span><span class="token punctuation">]</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="rp-animation-controllers-1" tabindex="-1">RP Animation Controllers <a class="header-anchor" href="#rp-animation-controllers-1" aria-hidden="true">#</a></h2><p>Resource Pack animation controllers can run things like sounds and particles too. Before calling sound or particle in ac, you need to define them in client entity file.</p>`,3),A=e("RP/entities/custom_tnt.json#minecraft:client_entity/description"),x=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;sound_effects&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;explosion&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki.custom_tnt.explosion&quot;</span> <span class="token comment">//where wiki.custom_tnt.explosion is a sound definited in sound_definitions just like animation sounds.</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;particle_effects&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;fuse_lit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:tnt_fuse_lit_particle&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>And only then you can call them in ac:</p>`,2),C=e("RP/animation_controllers/custom_tnt.animation_controllers.json#controller.animation.custom_tnt"),P=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;states&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;explode_state&quot;</span><span class="token operator">:</span><span class="token string">&quot;query.mark_variant == 1&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;explode_state&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;sound_effects&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;effect&quot;</span><span class="token operator">:</span><span class="token string">&quot;explosion&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">&quot;particle_effects&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
			<span class="token punctuation">{</span>
				<span class="token property">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fuse_lit&quot;</span>
				<span class="token comment">// &quot;locator&quot;: &quot;&lt;bone&gt;&quot; Locator can also go here too</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;default&quot;</span><span class="token operator">:</span><span class="token string">&quot;query.mark_variant == 0&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">Warning! Not every particle works there. If you have problems, consider trying another particle. For example, use one from blaze ac.</p></div><h2 id="bp-animation-controllers-1" tabindex="-1">BP Animation Controllers <a class="header-anchor" href="#bp-animation-controllers-1" aria-hidden="true">#</a></h2><p>Behavior Pack animation controllers use the same general format as RP Animation Controllers, except instead of triggering animations, they allow you to trigger commands. In general, they introduce two new fields:</p><ul><li><code>on_entry</code>: Commands to play when the state is entered</li><li><code>on_exit</code>: Commands to play when the state is exited</li></ul><p>Commands in this context mean three distinct things:</p><ul><li>A slash command, such as <code>/say Hello there!</code></li><li>An event trigger, on the entity, such as: <code>@s wiki:transform_into_plane</code></li><li>An arbitrary molang expression, such as <code>variable.tickets += 1;</code></li></ul><p>Here is an example BP animation controller, which exhibits some of this behavior:</p>`,8),S=e("BP/animation_controllers/helicopter.ac.json"),I=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.10.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;animation_controllers&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;controller.animation.helicopter.commands&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;initial_state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ground&quot;</span><span class="token punctuation">,</span>
			<span class="token property">&quot;states&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;ground&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;on_entry&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/say I am now in the ground!&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
					<span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token punctuation">{</span>
							<span class="token property">&quot;flying&quot;</span><span class="token operator">:</span> <span class="token string">&quot;!query.is_on_ground&quot;</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">]</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token property">&quot;flying&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
					<span class="token property">&quot;on_entry&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/say I am now in the air!&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
					<span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
						<span class="token punctuation">{</span>
							<span class="token property">&quot;ground&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.is_on_ground&quot;</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">]</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><h2 id="animation-controller-flow" tabindex="-1">Animation Controller Flow <a class="header-anchor" href="#animation-controller-flow" aria-hidden="true">#</a></h2><p>Through the examples, hopefully you are starting to get some concept for how animation controller flow works. In this section, I will explain it more explicitly.</p><h3 id="loading" tabindex="-1">Loading <a class="header-anchor" href="#loading" aria-hidden="true">#</a></h3><p>When an entity loads into the world, it will <em>enter</em> the default animation controller state, in each of its attached animation controllers. If no <code>initial_state</code> is defined, the state named <code>default</code> is used. If this is missing, the AC will generate a content log.</p><p>When running, the AC will do the following things each tick:</p><ol><li>Run any animations in the current state (will loop if set to loop, otherwise it will just play once). Run any commands in <code>on_entry</code>, the state was just entered.</li><li>Check all transitions to see if there is any valid transition. Search from the top to the bottom of the list, and move to the first valid transition. If a transition is found, <code>on_exit</code> commands will be played.</li></ol><p>Because of the way animation controllers are setup, it will only move from state to state at a MAXIMUM of once per tick.</p><h3 id="resetting" tabindex="-1">Resetting <a class="header-anchor" href="#resetting" aria-hidden="true">#</a></h3><p>Animation Controllers &quot;reset&quot; when an entity reloads (player join/leave, chunk reload, etc). This means that it will &quot;jump&quot; back to the default state. You should always have logic in your default state that can handle restarting any critical animations.</p>`,10);function R(j,V,B,E,N,M){const s=l("CodeHeader");return r(),p("div",null,[m,a(s,null,{default:t(()=>[d]),_:1}),b,a(s,null,{default:t(()=>[h]),_:1}),k,a(s,null,{default:t(()=>[_]),_:1}),q,a(s,null,{default:t(()=>[g]),_:1}),y,a(s,null,{default:t(()=>[f]),_:1}),w,a(s,null,{default:t(()=>[v]),_:1}),T,a(s,null,{default:t(()=>[A]),_:1}),x,a(s,null,{default:t(()=>[C]),_:1}),P,a(s,null,{default:t(()=>[S]),_:1}),I])}var F=o(u,[["render",R]]);export{W as __pageData,F as default};
