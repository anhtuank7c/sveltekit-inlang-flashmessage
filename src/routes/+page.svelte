<script lang="ts">
  import { i, language, languages, switchLanguage } from "@inlang/sdk-js";
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<pre>{i("welcome")}</pre>
<a href="/dashboard">Go to dashboard</a>

{#each languages as lang (lang)}
  <button on:click={() => switchLanguage(lang)}>{lang}</button>
{/each}
