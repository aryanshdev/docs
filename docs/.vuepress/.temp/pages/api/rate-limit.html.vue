<template><div><h1 id="rate-limit" tabindex="-1"><a class="header-anchor" href="#rate-limit" aria-hidden="true">#</a> Rate Limit</h1>
<p>Although Counter API does not have any authentication or login, it does have rate limit.</p>
<h2 id="limit-per-request" tabindex="-1"><a class="header-anchor" href="#limit-per-request" aria-hidden="true">#</a> Limit Per Request</h2>
<p>The API has rate limit per IP. It gathers IP address from the client. The limit is <code v-pre>2</code> requests per second for an IP.</p>
<br/>
<p>If you are interested how it's implemented, you can find
it <a href="https://github.com/counterapi/counterapi/blob/master/pkg/middlewares/limiter.go#L46" target="_blank">
here</a>.</p>
</div></template>


