import{_ as e,c as t,a,e as n,r as p,o}from"./404.md.28326229.js";const S='{"title":"Entity Timers","description":"","frontmatter":{"title":"Entity Timers","category":"Tutorials","tags":["intermediate"]},"headers":[{"level":2,"title":"Component-based timers","slug":"component-based-timers"},{"level":3,"title":"minecraft:timer","slug":"minecraft-timer"},{"level":3,"title":"minecraft:environment_sensor","slug":"minecraft-environment-sensor"},{"level":3,"title":"minecraft:ageable","slug":"minecraft-ageable"},{"level":3,"title":"Other dummy-timers:","slug":"other-dummy-timers"},{"level":2,"title":"Animation-based timers","slug":"animation-based-timers"},{"level":3,"title":"Simple timers","slug":"simple-timers"},{"level":3,"title":"Random interval","slug":"random-interval"},{"level":3,"title":"Weighted random choice","slug":"weighted-random-choice"}],"relativePath":"entities/timers.md"}',r={},i=n('<p>Time-based interactions are extremely useful tools for map making. This article hopes to provide an extensive list which details the many ways which timers can be made. For convenience, this page will be split up into two main sections: component-based timers and animation-based timers. Each has their own advantages and disadvantages, which will be outlined in their respective sections. You might also find useful <a href="/commands/timers.html">Command Timers</a>.</p><h2 id="component-based-timers" tabindex="-1">Component-based timers <a class="header-anchor" href="#component-based-timers" aria-hidden="true">#</a></h2><p>Component-based timers are done inside the entity.json file of the behavior pack. They have the distinct advantage of persisting upon the entity being reloaded, but are limited by the number of timing components (duplicate components replace each other, which means defining multiple timers using the <code>minecraft:timer</code> component isn&#39;t possible).</p><h3 id="minecraft-timer" tabindex="-1">minecraft:timer <a class="header-anchor" href="#minecraft-timer" aria-hidden="true">#</a></h3><p>This is the simplest but most effective component for triggering events after an elapsed amount of time. The component <a href="https://bedrock.dev/docs/1.14.0.0/1.14.30.2/Entities#minecraft:timer" target="_blank" rel="noopener noreferrer">minecraft:timer</a> provides three main ways in which the amount of time before the event can be defined:</p><ul><li>Exact timing: an exact amount of time after which the event will fire is defined (e.g. 3.4 seconds)</li><li>Random interval: an interval is defined in which the event will fire at a random time inside that interval (e.g. between 3 to 5 seconds)</li><li>Weighted random choice: a number of times are defined and assigned weights, one of which will be chosen for the event to fire (e.g. a 20% chance for the event to fire at 5 seconds, and an 80% chance to fire at 20 seconds)</li></ul><p>In the vanilla Behavior Pack, this component is used in all kinds of circumstances. For example:</p><ul><li>The dolphin can only spend 20 seconds on land before it dries out</li><li>Bees will perish between 10 and 60 seconds after stinging</li><li>The wandering trader will only stay for either 2400 or 3600 seconds</li></ul><p>A simple example which triggers an event after 5.6 seconds:</p>',9),l=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:timer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;time&quot;</span><span class="token operator">:</span> <span class="token number">5.6</span><span class="token punctuation">,</span>
  <span class="token property">&quot;time_down_event&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:my_event&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>A more complex example which triggers an event after a randomized amount of delay using weighted values:</p>`,2),c=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:timer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;looping&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//true will fires event after every execution,  false will fire event only once.</span>
  <span class="token property">&quot;random_time_choices&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">0.5</span> <span class="token comment">//Half a second of delay</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token comment">//Ten seconds of delay</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token comment">//Thirty seconds of delay</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">120</span> <span class="token comment">//2 minutes of delay</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;time_down_event&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:event&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;self&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>A particularly useful way to handle time events is using a single, looping <code>minecraft:timer</code> component and processing the events on each tick (or however often you decide to fire the timer). This is done by using the <code>randomize</code> parameter in events, where a weight may be used determine how often other events will be run. This can get you a lot of extra mileage out of a single timer component.</p>`,2),u=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;wiki:do_event&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;randomize&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;add&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;wiki:my_event&quot;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
      <span class="token property">&quot;add&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;component_groups&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;wiki:my_more_frequent_event&quot;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;weight&quot;</span><span class="token operator">:</span> <span class="token number">50</span> <span class="token comment">//Fires nothing</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="minecraft-environment-sensor" tabindex="-1">minecraft:environment_sensor <a class="header-anchor" href="#minecraft-environment-sensor" aria-hidden="true">#</a></h3><p>Another component (<a href="https://bedrock.dev/docs/stable/Entities#minecraft:environment_sensor" target="_blank" rel="noopener noreferrer">minecraft:environment_sensor</a>) which can be very useful for time-based events is <code>minecraft:environment_sensor</code>. Pairing this sensor with the <code>hourly_clock_time</code> or <code>clock_time</code> filters can be used to trigger events based off in-game time.</p><p>Here is an example which is used to fire an event 800 ticks after the start of the day (valid range is 0 to 24000):</p>`,4),m=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:environment_sensor&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;triggers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;filters&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;test&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hourly_clock_time&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;operator&quot;</span><span class="token operator">:</span> <span class="token string">&quot;=&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">800</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:my_daily_event&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="minecraft-ageable" tabindex="-1">minecraft:ageable <a class="header-anchor" href="#minecraft-ageable" aria-hidden="true">#</a></h3><p>If this component (<a href="https://bedrock.dev/docs/stable/Entities#minecraft:ageable" target="_blank" rel="noopener noreferrer">minecraft:ageable</a>) is not being used in the entity&#39;s behavior for a different purpose, it can be useful as an additional timer. It&#39;s important to note that it requires the <code>minecraft:is_baby</code> component to be defined in order to function.</p><p>Here is an example which fires an event after four seconds:</p>`,4),b=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;minecraft:is_baby&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;minecraft:ageable&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;duration&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token property">&quot;grow_up&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;event&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wiki:my_other_event&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;self&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="other-dummy-timers" tabindex="-1">Other dummy-timers: <a class="header-anchor" href="#other-dummy-timers" aria-hidden="true">#</a></h3><p>Taking a peak at the docs suggest there are other components which can also can be used for timing. Essentially, you are looking for any component with a &quot;time down event&quot; or a &quot;duration&quot;.</p><p>Non-exhaustive list of promising examples:</p><ul><li><code>minecraft:angry</code> (requires the entity to have a target, time must be an integer)</li><li><code>minecraft.behavior.hide</code></li><li><code>minecraft:behavior.celebrate</code></li></ul><h2 id="animation-based-timers" tabindex="-1">Animation-based timers <a class="header-anchor" href="#animation-based-timers" aria-hidden="true">#</a></h2><p>Behavior pack animations are an extremely powerful tool for triggering time-based events. They have the distinct advantage of providing an &quot;infinite&quot; amount of timers, but are restarted upon an entity being reloaded (leaving and rejoining the world or the chunk containing the entity unloading will cause the timer to restart when the entity reloads).</p><p>Animations function differently in behavior packs than in resource packs. If you are unfamiliar with how they operate, it is recommended to learn more about them by checking out the official documentation or the other pages on this wiki.</p><h3 id="simple-timers" tabindex="-1">Simple timers <a class="header-anchor" href="#simple-timers" aria-hidden="true">#</a></h3><p>By triggering animations from an animation controller or directly from the scripts section, you can execute specific events, commands, or molang expressions in a timed-sequence, called a timeline.</p><p>You can set up timelines like this:</p>`,11),d=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;format_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.8.0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;animations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;animation.command.example_timeline&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;timeline&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;0.0&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/say this will trigger instantly&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;3.0&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/say this will trigger after 3 seconds&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;animation_length&quot;</span><span class="token operator">:</span> <span class="token number">3.1</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token property">&quot;animation.command.example_timeline_2&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token property">&quot;timeline&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
				<span class="token property">&quot;100&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/say this will trigger after 100 seconds&quot;</span><span class="token punctuation">,</span>
				<span class="token property">&quot;0.0&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
					<span class="token string">&quot;/say you can trigger multiple events at once&quot;</span><span class="token punctuation">,</span>
					<span class="token string">&quot;/say by using timelines.&quot;</span>
				<span class="token punctuation">]</span><span class="token punctuation">,</span>
				<span class="token property">&quot;55.55&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/say this will trigger after 55.55 seconds.&quot;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token property">&quot;animation_length&quot;</span><span class="token operator">:</span> <span class="token number">100.1</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="random-interval" tabindex="-1">Random interval <a class="header-anchor" href="#random-interval" aria-hidden="true">#</a></h3><p>A very useful feature of the timer component is its ability to define a random interval in which the event will be triggered. This functionality can be replicated using animations and a controller. Below is an example of an animation triggered by adding the <code>minecraft:is_sheared</code> component to an entity which randomly fires an event between 2 to 7 seconds after activation. Animation and controller version 1.10.0.</p>`,3),k=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;controller.animation.shanewolf.random_interval&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;initial_state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;inactive&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;states&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;inactive&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.is_sheared&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;on_entry&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;variable.random_interval = math.random(2, 7);&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;/say random interval started&quot;</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;animations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;wiki:animate_interval&quot;</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;inactive&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.anim_time &gt;= variable.random_interval&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;on_exit&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;@s wiki:stop_random_interval&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;/say random interval finished&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div>`,1),h=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;animation.shanewolf.random_interval&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;animation_length&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Explanation: Upon entry into the state beginning the animation, a variable is given a random value between 2 and 7. The animation finishes when the current animation time is greater than or equal to the value of this variable.</p><p><strong>Notes</strong>:</p><ul><li>The animation length can be set to any value greater than the maximum end of the time range (100 is used as a general template)</li><li>math.random(a, b) is used to trigger an event in the range [a, b]</li><li>math.floor(math.random(a, b.99)) may be used to end the timer at integer values (0.99 must be added to b)</li><li>Any events or commands to run when the animation is finished are put inside on_exit</li></ul><h3 id="weighted-random-choice" tabindex="-1">Weighted random choice <a class="header-anchor" href="#weighted-random-choice" aria-hidden="true">#</a></h3><p>Another useful feature of the timer component is its ability to trigger events at a time determined by a weighted list of values. This functionality can also be replicated using animations and a controller. Below is an example of an animation triggered by adding the <code>minecraft:is_charged</code> component to an entity which randomly fires an event at either 2, 5, or 9 seconds with weights of 30, 60, and 10, respectively. Animation and controller version 1.10.0.</p>`,6),q=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;controller.animation.shanewolf.random_choices&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;initial_state&quot;</span><span class="token operator">:</span> <span class="token string">&quot;inactive&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;states&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;inactive&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.is_powered&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;active&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;on_entry&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;variable.random_choices = math.random(0, 100);&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;/say random interval started&quot;</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;animations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;wiki:animate_choices&quot;</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;transitions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;inactive&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.anim_time &gt;= 2.0 &amp;&amp; variable.random_choices &lt; 30&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;inactive&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.anim_time &gt;= 5.0 &amp;&amp; variable.random_choices &lt; 90&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;inactive&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query.anim_time &gt;= 9.0 &amp;&amp; variable.random_choices &lt;= 100&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;on_exit&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;@s wiki:stop_random_choices&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;/say random choices finished&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div>`,1),g=n(`<div class="language-json line-numbers-mode"><pre><code><span class="token property">&quot;animation.shanewolf.random_choices&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;animation_length&quot;</span><span class="token operator">:</span> <span class="token number">100</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Explanation: Upon entry into the state beginning the animation, a variable is given a random value between 0 and 100 (sum of the weights). The transitions are laid out with the list of values ordered from the smallest time to the largest time. This is done so multiple &amp;&amp; operators are not required in the latter transitions to define the variable&#39;s range (the query for the smallest times return true first and have their weights checked before the others--flipping 2 and 5 would result in 2 mistakenly having a weight of 90 instead of 30). The animation finishes when the current animation time is greater than or equal to a time in the list and the value of the random variable falls within that time&#39;s defined weight range.</p><p><strong>Notes</strong>:</p><ul><li>The animation length can be set to any value greater than the maximum end of the time range (100 is used as a general template)</li><li>For this particular format to work, order the list of valid times from smallest to largest</li><li>To assign a weight to a time in the list, add the weight to the value the randomized variable must be less than in the list&#39;s previous entry (e.g. 5 seconds has a weight of 90 - 30 = 60)</li><li>Any events or commands to run when the animation is finished are put inside on_exit</li></ul><p>Hopefully this spread some light on the subject of handling time in Minecraft Bedrock! As shown above, there are many possible ways it can be done, each with their own pros and cons. If you have any other useful methods for creating time-based events, please <a href="/contribute.html">contribute to the wiki</a>!</p>`,5);function _(f,v,y,w,T,A){const s=p("CodeHeader");return o(),t("div",null,[i,a(s),l,a(s),c,a(s),u,a(s),m,a(s),b,a(s),d,a(s),k,a(s),h,a(s),q,a(s),g])}var C=e(r,[["render",_]]);export{S as __pageData,C as default};
