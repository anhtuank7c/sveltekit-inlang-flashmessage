export const handle = async ({ event, resolve }) => {
  console.log('hooks', event.url.pathname)
  return await resolve(event)
}