/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

declare namespace App {
  interface Locals {
    user?: { name: string; email: string }
  }

  interface Session {
    user?: { name: string; email: string }
    loadCalls?: number
  }

  interface Stuff {
    fromErrorTemplate?: boolean
  }
}
