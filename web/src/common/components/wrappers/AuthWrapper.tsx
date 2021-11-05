import { FC } from 'react'
import { useAuthorization } from '@Hooks/useAuthorization'

export const AuthWrapper: FC = ({ children }) => {
  useAuthorization()

  return <>{children}</>
}
