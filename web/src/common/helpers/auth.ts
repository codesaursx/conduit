import { TOKEN_FIELD } from '@Config/constants.config'
import { getCookie } from '@Libs/jsCookie.lib'

export const PRIVATE_PATHS = ['/settings', '/editor', '/editor/[slug]']
export const AUTH_PATHS = ['/signin', '/signup']

export const hasToken = () => !!getCookie(TOKEN_FIELD)
export const isInPrivatePath = (path: string) => PRIVATE_PATHS.includes(path)
export const isInPublicPath = (path: string) => !PRIVATE_PATHS.includes(path)
export const isInAuthPath = (path: string) => AUTH_PATHS.includes(path)
