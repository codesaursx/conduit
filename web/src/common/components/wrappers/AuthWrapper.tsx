import { FC } from 'react'
import { useAuth } from '@Hooks/useAuth'

export const AuthWrapper: FC = ({ children }) => {
  const { isLoading } = useAuth()

  if (isLoading) return <h1>loading...</h1>

  return <>{children}</>
}
