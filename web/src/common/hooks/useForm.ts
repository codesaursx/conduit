import { TSignInUser } from '@Interfaces/user.interface'
import { THandleSubmit } from '@Interfaces/utils.interface'
import { useState } from 'react'

export const useForm: TUseForm = (email, password, cb) => {
  const [error, setError] = useState('')

  const handleSubmit: THandleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!email) {
      setError('Email must not be empty')
      return
    }

    if (!password) {
      setError('Password must not be empty')
      return
    }

    if (password.length < 6) {
      setError('Password must be bigger than 5 characters')
      return
    }

    await cb({
      email: email,
      password: password
    })
  }

  return {
    handleSubmit,
    error
  }
}

type TUseForm = {
  (email: string, password: string, cb: (user: TSignInUser) => Promise<void>): TUseFormReturn
}

type TUseFormReturn = {
  handleSubmit: THandleSubmit
}
