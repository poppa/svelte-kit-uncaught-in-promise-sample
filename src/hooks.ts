import type { GetSession, Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ resolve, event }) => {
  /*
    In a real world app, resolve the user here and put on on the
    `locals` object
  */

  console.log(`-> Handle:`, event.url.toString())

  return resolve(event)
}

export const getSession: GetSession = async ({
  locals,
}): Promise<App.Session> => {
  return {
    user: locals.user,
  }
}
