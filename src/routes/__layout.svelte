<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit'

  export const load: Load = ({ session, url, status }) => {
    if (!session.loadCalls) {
      session.loadCalls = 1
    } else {
      session.loadCalls += 1
    }

    // Uncomment below to circumvent the issue

    // if (session.loadCalls > 1) {
    //   return { status: 200 }
    // }

    console.log(
      `__layout.svelte -> load (call: %O): %s`,
      session.loadCalls,
      url.toString()
    )

    if (!session.user) {
      return {
        status: 401,
        error: new Error('Authentication Required'),
      }
    }

    return {
      status: status ?? 200,
    }
  }
</script>

<script lang="ts">
  import { session } from '$app/stores'
</script>

{#if $session.user}
  <h1>Authenticated</h1>
  <main>
    <slot />
  </main>
{:else}
  <slot />
{/if}
