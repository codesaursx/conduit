import { FormEvent } from 'react'

export type HashMap<T = unknown> = {
  [index: string]: T
}

export type inputType = 'text' | 'password' | 'email'

export type THandleSubmit = (e: FormEvent<HTMLFormElement>) => void
