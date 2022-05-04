# Svelte-Kit uncaught promise error example

This "app" is an example of how returning a non-`200` status from `load` in
`__layout.svelte` in a Svelte-Kit app results in an _uncaught promise error_.

The result is that client side code in `__error.svelte` won't execute.

This seems to be due to `load` in `__layout.svelte` being called recusively
when the status in non-`200`. If we track the number of calls and return `200`
after the first call (see line `13-15` in `__layout.svelte`) , everything seems
to work properly. But this feels like a hack to say the least.
