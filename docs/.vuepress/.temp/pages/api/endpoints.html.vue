<template><div><h1 id="endpoints" tabindex="-1"><a class="header-anchor" href="#endpoints" aria-hidden="true">#</a> Endpoints</h1>
<p>Counter API does not have any authentication. You do not need any token, or a password to use it. The API address
is <a href="https://api.counterapi.dev/v1" target="_blank" rel="noopener noreferrer">https://api.counterapi.dev/v1<ExternalLinkIcon/></a></p>
<br/>
<p>You can find all endpoints listed below. You can simply run the given example query to see the result.</p>
<h2 id="counter-up" tabindex="-1"><a class="header-anchor" href="#counter-up" aria-hidden="true">#</a> Counter Up</h2>
<p>You can count up with given counter name. The endpoint is <code v-pre>https://api.counterapi.dev/v1/up</code>.</p>
<h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>required</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>name</code></td>
<td>yes</td>
<td>Counter name</td>
</tr>
</tbody>
</table>
<h3 id="test" tabindex="-1"><a class="header-anchor" href="#test" aria-hidden="true">#</a> Test</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> GET https://api.counterapi.dev/v1/test/test/up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><APIRun type="up" /><h2 id="counter-down" tabindex="-1"><a class="header-anchor" href="#counter-down" aria-hidden="true">#</a> Counter Down</h2>
<p>You can count down with given counter name. The endpoint is <code v-pre>https://api.counterapi.dev/v1/down</code>.</p>
<h3 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>required</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>name</code></td>
<td>true</td>
<td>Counter name</td>
</tr>
</tbody>
</table>
<h3 id="test-1" tabindex="-1"><a class="header-anchor" href="#test-1" aria-hidden="true">#</a> Test</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> GET https://api.counterapi.dev/v1/down?name<span class="token operator">=</span>APITest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><APIRun type="down" /><h2 id="set-counter" tabindex="-1"><a class="header-anchor" href="#set-counter" aria-hidden="true">#</a> Set Counter</h2>
<p>You can set counter with given counter name and count number. The endpoint is <code v-pre>https://api.counterapi.dev/v1/set</code>.</p>
<h3 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>required</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>name</code></td>
<td>true</td>
<td>Counter name</td>
</tr>
<tr>
<td><code v-pre>count</code></td>
<td>true</td>
<td>Count number</td>
</tr>
</tbody>
</table>
<h3 id="test-2" tabindex="-1"><a class="header-anchor" href="#test-2" aria-hidden="true">#</a> Test</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> GET https://api.counterapi.dev/v1/set?name<span class="token operator">=</span>APITest<span class="token operator">&amp;</span><span class="token assign-left variable">count</span><span class="token operator">=</span><span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><APIRun type="set" /><h2 id="counter-get" tabindex="-1"><a class="header-anchor" href="#counter-get" aria-hidden="true">#</a> Counter Get</h2>
<p>You can count get with given counter name. The endpoint is <code v-pre>https://api.counterapi.dev/v1/get</code>.</p>
<h3 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>required</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>name</code></td>
<td>true</td>
<td>Counter name</td>
</tr>
</tbody>
</table>
<h3 id="test-3" tabindex="-1"><a class="header-anchor" href="#test-3" aria-hidden="true">#</a> Test</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> GET https://api.counterapi.dev/v1/get?name<span class="token operator">=</span>APITest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><APIRun type="get" /><h2 id="counts-list" tabindex="-1"><a class="header-anchor" href="#counts-list" aria-hidden="true">#</a> Counts List</h2>
<p>You can get count list with given counter name. The endpoint is <code v-pre>https://api.counterapi.dev/v1/counts</code>.</p>
<h3 id="parameters-4" tabindex="-1"><a class="header-anchor" href="#parameters-4" aria-hidden="true">#</a> Parameters</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>required</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>name</code></td>
<td>true</td>
<td>Counter name</td>
</tr>
<tr>
<td><code v-pre>group_by</code></td>
<td>true</td>
<td>Grouping the results by given time interval. e.g. <code v-pre>hour</code>, <code v-pre>day</code>, <code v-pre>week</code>, <code v-pre>month</code>, <code v-pre>year</code>.</td>
</tr>
<tr>
<td><code v-pre>order_by</code></td>
<td>no</td>
<td>Ordering the results. e.g. <code v-pre>asc</code>, <code v-pre>desc</code>.</td>
</tr>
</tbody>
</table>
<h3 id="test-4" tabindex="-1"><a class="header-anchor" href="#test-4" aria-hidden="true">#</a> Test</h3>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-X</span> GET https://api.counterapi.dev/v1/counts?name<span class="token operator">=</span>APITest<span class="token operator">&amp;</span><span class="token assign-left variable">group_by</span><span class="token operator">=</span>day
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><APIRun type="counts/" /></div></template>


