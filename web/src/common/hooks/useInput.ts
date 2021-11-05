import { TInputType } from '@Interfaces/utils.interface'
import { ChangeEvent, useState } from 'react'

const OPTIONAL_PLACEHOLDERS = {
  ['password']: 'Password',
  ['email']: 'Email',
  ['text']: 'Your name'
}

/**
 * Hook which gives you the whole possibly logic for an input
 * @param type input type
 * @returns value, onChange function, input type
 */
export const useInput = (type: TInputType): TUseInput => {
  const [value, setValue] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return {
    value,
    type,
    placeholder: OPTIONAL_PLACEHOLDERS[type],
    onChange
  }
}

export type TUseInput = {
  value: string
  type: TInputType
  placeholder: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
