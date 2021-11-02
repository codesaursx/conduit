import jsCookie from 'js-cookie'

export const getCookie = (cookieField: string) => jsCookie.get(cookieField)
export const setCookie = (cookieField: string, value: string | object) => jsCookie.set(cookieField, value)
export const removeCookie = (cookieField: string) => jsCookie.remove(cookieField)
