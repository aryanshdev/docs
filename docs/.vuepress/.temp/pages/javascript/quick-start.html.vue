<template><div><h1 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick Start</h1>
<p><code v-pre>counterapi</code> is totally compatible both <code v-pre>Typescript</code> and <code v-pre>JavaScript</code>. Just import it in your project and start to
count!</p>
<br/>
<p>It does not require authentication or login. Only obligation is the rate limit. The API is limited to <code v-pre>2</code>
request/second per IP.</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>CounterAPI<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"counterapi"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CounterAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="count-up" tabindex="-1"><a class="header-anchor" href="#count-up" aria-hidden="true">#</a> Count Up</h2>
<p>You can count up with given name. The name of the counter is unique. Do not forget that anyone with same name can count
up or down.</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>CounterAPI<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"counterapi"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CounterAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

counter<span class="token punctuation">.</span><span class="token function">up</span><span class="token punctuation">(</span><span class="token string">"MyCounter01"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="count-down" tabindex="-1"><a class="header-anchor" href="#count-down" aria-hidden="true">#</a> Count Down</h2>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>CounterAPI<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"counterapi"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CounterAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

counter<span class="token punctuation">.</span><span class="token function">down</span><span class="token punctuation">(</span><span class="token string">"MyCounter01"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="set-count" tabindex="-1"><a class="header-anchor" href="#set-count" aria-hidden="true">#</a> Set Count</h2>
<p>You can set your counter to with <code v-pre>set</code> function.</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>CounterAPI<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"counterapi"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CounterAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

counter<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"MyCounter01"</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="get-count-number" tabindex="-1"><a class="header-anchor" href="#get-count-number" aria-hidden="true">#</a> Get Count Number</h2>
<p>After counting up/down, you can get the final status of your counter with <code v-pre>get</code> function.</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>CounterAPI<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"counterapi"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CounterAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

counter<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"MyCounter01"</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


