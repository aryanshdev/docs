<template><div><h1 id="counter-name-hashing" tabindex="-1"><a class="header-anchor" href="#counter-name-hashing" aria-hidden="true">#</a> Counter Name Hashing</h1>
<p>Counter name is unique. However, anyone who knows the name can count up or down. Also, the counter name can be
only <code v-pre>100</code> character long and <code v-pre>alphanumeric</code>.</p>
<h2 id="valid-invalid-counter-names" tabindex="-1"><a class="header-anchor" href="#valid-invalid-counter-names" aria-hidden="true">#</a> Valid &amp; Invalid Counter Names</h2>
<table>
<thead>
<tr>
<th>Valid</th>
<th>Invalid</th>
</tr>
</thead>
<tbody>
<tr>
<td>MyCounter001</td>
<td>my-counter-001</td>
</tr>
<tr>
<td>MyCounter</td>
<td>my-counter&amp;</td>
</tr>
<tr>
<td>mycounter</td>
<td>my.counter</td>
</tr>
</tbody>
</table>
<h2 id="hashing" tabindex="-1"><a class="header-anchor" href="#hashing" aria-hidden="true">#</a> Hashing</h2>
<p>If you would like to name your counter with different characters, or making it unique. You can use built in hashing
option.</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>CounterAPI<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"counterapi"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CounterAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

counter<span class="token punctuation">.</span><span class="token function">up</span><span class="token punctuation">(</span><span class="token string">"My Counter 01"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>Counter <span class="token punctuation">{</span>
  ID: <span class="token number">10</span>,
  Name: <span class="token string">'9eacf10d08ba89201f4017cd6eba6586a0559cbe0b01a2d75564ffb93d610f17'</span>,
  Count: <span class="token number">2</span>,
  UpdatedAt: <span class="token string">'2021-03-27T19:50:30.556599163Z'</span>,
  CreatedAt: <span class="token string">'2021-03-28T03:47:05.422508+08:00'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Passing <code v-pre>true</code> value will hash <code v-pre>MyCounter01</code> string with <code v-pre>SHA256</code> and store it with hashed string.</p>
<p>When you want to check back your counter, you can use the same string. The string will be hashed again and return the
counter value back.</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span>CounterAPI<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"counterapi"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CounterAPI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

counter<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"My Counter 01"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>response<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>Counter <span class="token punctuation">{</span>
  ID: <span class="token number">10</span>,
  Name: <span class="token string">'9eacf10d08ba89201f4017cd6eba6586a0559cbe0b01a2d75564ffb93d610f17'</span>,
  Count: <span class="token number">2</span>,
  UpdatedAt: <span class="token string">'2021-03-27T19:50:30.556599163Z'</span>,
  CreatedAt: <span class="token string">'2021-03-28T03:47:05.422508+08:00'</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


