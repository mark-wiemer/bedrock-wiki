import{_ as r,c,a as s,w as t,b as e,d as n,e as o,r as p,o as l}from"./404.md.28326229.js";const S='{"title":"Shared Constructs","description":"","frontmatter":{"title":"Shared Constructs","nav_order":1,"tags":["Stable","Last updated for Version 1.18.10"],"mention":["Ciosciaa"]},"headers":[{"level":2,"title":"Range Objects","slug":"range-objects"},{"level":2,"title":"Fraction Objects","slug":"fraction-objects"}],"relativePath":"documentation/shared-constructs.md"}',i={},d=e("p",null,"A few JSON constructs are expressable in multiple locations in the add-ons system.",-1),u=e("h2",{id:"range-objects",tabindex:"-1"},[n("Range Objects "),e("a",{class:"header-anchor",href:"#range-objects","aria-hidden":"true"},"#")],-1),m=e("p",null,"Range objects define a spread between two numbers.",-1),b=n("Range Object Example"),_=o(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;min&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
	<span class="token property">&quot;max&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>When provided, a random value will be selected inclusively between the minimum and maximum. Rolls are not retained; a new random value will be rolled each instance the range object would be used. The maximum must not be less than the minimum, but they may be equal to affix rolls to a specific value.</p><h2 id="fraction-objects" tabindex="-1">Fraction Objects <a class="header-anchor" href="#fraction-objects" aria-hidden="true">#</a></h2><p>Fraction objects define a fraction using a numerator and denominator.</p>`,4),h=n("Fraction Object Example"),f=o(`<div class="language-json line-numbers-mode"><pre><code><span class="token punctuation">{</span>
	<span class="token property">&quot;numerator&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
	<span class="token property">&quot;denominator&quot;</span><span class="token operator">:</span> <span class="token number">5</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>The value used in place of the object will be the computed division, <code>numerator</code> \xF7 <code>denominator</code>. Both the numerator and denominator must be at least <code>1</code>, and the denominator cannot be equal to the numerator.</p>`,2);function v(k,j,g,T,x,w){const a=p("CodeHeader");return l(),c("div",null,[d,u,m,s(a,null,{default:t(()=>[b]),_:1}),_,s(a,null,{default:t(()=>[h]),_:1}),f])}var q=r(i,[["render",v]]);export{S as __pageData,q as default};
