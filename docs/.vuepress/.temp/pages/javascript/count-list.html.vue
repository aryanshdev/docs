<template><div><h1 id="count-list" tabindex="-1"><a class="header-anchor" href="#count-list" aria-hidden="true">#</a> Count List</h1>
<p>Counter API keeps every count with a timestamp. You can get the list simply passing the count name. This feature design
to generate useful history chart.</p>
<h2 id="get-count-list" tabindex="-1"><a class="header-anchor" href="#get-count-list" aria-hidden="true">#</a> Get Count List</h2>
<p>You can use <code v-pre>CounterAPI</code> to get count list grouped by <code v-pre>hour</code>, <code v-pre>day</code>, <code v-pre>week</code>, <code v-pre>month</code> and <code v-pre>year</code>.</p>
<p>You can also use <code v-pre>order_by</code> query parameter to order the list. For now, result list length is limited to <code v-pre>1000</code>. If you
need more than that, please contact with me.</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>CounterAPI<span class="token punctuation">,</span> GroupByTypes<span class="token punctuation">,</span> OrderByTypes<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"counterapi"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CounterAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> q <span class="token operator">=</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">"test"</span><span class="token punctuation">,</span>
    group_by<span class="token operator">:</span> GroupByTypes<span class="token punctuation">.</span>Day<span class="token punctuation">,</span>
    order_by<span class="token operator">:</span> OrderByTypes<span class="token punctuation">.</span><span class="token constant">ASC</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

counter<span class="token punctuation">.</span><span class="token function">counts</span><span class="token punctuation">(</span>q<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>
  Count <span class="token punctuation">{</span> Count: <span class="token number">2</span>, Date: <span class="token string">'2021-03-07T00:00:00+08:00'</span> <span class="token punctuation">}</span>,
  Count <span class="token punctuation">{</span> Count: <span class="token number">14</span>, Date: <span class="token string">'2021-03-26T00:00:00+08:00'</span> <span class="token punctuation">}</span>,
  Count <span class="token punctuation">{</span> Count: <span class="token number">40</span>, Date: <span class="token string">'2021-03-27T00:00:00+08:00'</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


