<script lang="ts">
  import { page, session } from '$app/stores'

  const doLogin = () => {
    console.log(`I will never be called`)
    session.update((curr) => {
      curr.user = { name: 'Test User', email: 'test@user.com' }
      return curr
    })
  }

  console.log(
    `__error.svelte (status: %d): Error: %O`,
    $page.status,
    $page.error
  )
</script>

{#if $page.status === 401}
  <div>Render Login Form</div>
  <button on:click={doLogin}>Click here to login</button>
{:else}
  <div>Error {$page.status}</div>
{/if}
