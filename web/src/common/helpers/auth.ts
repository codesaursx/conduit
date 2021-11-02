import { TOKEN_FIELD } from '@Config/constants.config'
import { getCookie } from '@Libs/jsCookie.lib'

export const PUBLIC_PATHS = ['/signin', '/signup', '/_error']

export const hasToken = () => !!getCookie(TOKEN_FIELD)
export const isInPrivatePath = (path: string) => !PUBLIC_PATHS.includes(path)
export const isInPublicPath = (path: string) => PUBLIC_PATHS.includes(path)
