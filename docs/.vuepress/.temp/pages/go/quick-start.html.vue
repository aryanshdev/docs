<template><div><h1 id="quick-start-with-cli" tabindex="-1"><a class="header-anchor" href="#quick-start-with-cli" aria-hidden="true">#</a> Quick Start with CLI</h1>
<p>Count API CLI is a standalone tool which enables you to count up/down, get counter information or list history of the
counter.</p>
<br/>
It does not require authentication or login.
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>CLI <span class="token builtin class-name">command</span> to counter things

Usage:
  counter <span class="token punctuation">[</span>command<span class="token punctuation">]</span>

Available Commands:
  counts      Fetches counts of counter
  down        Count down <span class="token keyword">for</span> given name
  get         Fetches counter information
  <span class="token builtin class-name">help</span>        Help about any <span class="token builtin class-name">command</span>
  <span class="token builtin class-name">set</span>         Sets counter
  up          Count up <span class="token keyword">for</span> given name
  version     Print the version/build number

Flags:
  -h, <span class="token parameter variable">--help</span>   <span class="token builtin class-name">help</span> <span class="token keyword">for</span> counter

Use <span class="token string">"counter [command] --help"</span> <span class="token keyword">for</span> <span class="token function">more</span> information about a command.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="count-up" tabindex="-1"><a class="header-anchor" href="#count-up" aria-hidden="true">#</a> Count Up</h2>
<p>You can count up with given name. The name of the counter is unique. Do not forget that anyone with same name can count
up or down.</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>❯ counter up <span class="token parameter variable">--name</span> MyCounter01                  
<span class="token punctuation">{</span>
        <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token number">12</span>,
        <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"MyCounter01"</span>,
        <span class="token string">"count"</span><span class="token builtin class-name">:</span> <span class="token number">1</span>,
        <span class="token string">"created_at"</span><span class="token builtin class-name">:</span> <span class="token string">"2021-03-28T21:19:09.450461117Z"</span>,
        <span class="token string">"updated_at"</span><span class="token builtin class-name">:</span> <span class="token string">"2021-03-28T21:19:09.466029457Z"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="count-down" tabindex="-1"><a class="header-anchor" href="#count-down" aria-hidden="true">#</a> Count Down</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>❯ counter down <span class="token parameter variable">--name</span> MyCounter01
<span class="token punctuation">{</span>
    <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token number">12</span>,
    <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"MyCounter01"</span>,
    <span class="token string">"count"</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
    <span class="token string">"created_at"</span><span class="token builtin class-name">:</span> <span class="token string">"2021-03-28T21:19:09.450461117Z"</span>,
    <span class="token string">"updated_at"</span><span class="token builtin class-name">:</span> <span class="token string">"2021-03-28T21:19:09.466029457Z"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="set-count" tabindex="-1"><a class="header-anchor" href="#set-count" aria-hidden="true">#</a> Set Count</h2>
<p>You can set your counter to with <code v-pre>set</code> function.</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>❯ counter <span class="token builtin class-name">set</span> <span class="token parameter variable">--name</span> MyCounter01 <span class="token parameter variable">--count</span> <span class="token number">10</span>
<span class="token punctuation">{</span>
    <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token number">12</span>,
    <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"MyCounter01"</span>,
    <span class="token string">"count"</span><span class="token builtin class-name">:</span> <span class="token number">10</span>,
    <span class="token string">"created_at"</span><span class="token builtin class-name">:</span> <span class="token string">"2021-03-28T21:19:09.450461117Z"</span>,
    <span class="token string">"updated_at"</span><span class="token builtin class-name">:</span> <span class="token string">"2021-03-28T21:19:09.466029457Z"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="get-counter" tabindex="-1"><a class="header-anchor" href="#get-counter" aria-hidden="true">#</a> Get Counter</h2>
<p>After counting up/down, you can get the final status of your counter with <code v-pre>get</code> function.</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>❯ counter get <span class="token parameter variable">--name</span> MyCounter01
<span class="token punctuation">{</span>
    <span class="token string">"id"</span><span class="token builtin class-name">:</span> <span class="token number">12</span>,
    <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"MyCounter01"</span>,
    <span class="token string">"count"</span><span class="token builtin class-name">:</span> <span class="token number">0</span>,
    <span class="token string">"created_at"</span><span class="token builtin class-name">:</span> <span class="token string">"2021-03-28T21:19:09.450461117Z"</span>,
    <span class="token string">"updated_at"</span><span class="token builtin class-name">:</span> <span class="token string">"2021-03-28T21:19:09.466029457Z"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


