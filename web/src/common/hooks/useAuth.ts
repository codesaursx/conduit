import { hasToken, isInAuthPath, isInPrivatePath, isInPublicPath } from '@Helpers/auth'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'

/**
 * Hook which has the logic to redirect when you are logged in or not
 * @returns loading state that tells you when the process has completed
 */
export const useAuth = () => {
  const router = useRouter()
  const path = router.pathname
  const [isLoading, setIsLoading] = useState(true)

  const redirectToHome = () => router.push('/')

  const handleAuth = async () => {
    if (!hasToken() && isInPrivatePath(path)) {
      await redirectToHome()
      setIsLoading(false)
      return
    }

    if (hasToken() && isInAuthPath(path)) {
      await redirectToHome()
      setIsLoading(false)
      return
    }

    setIsLoading(false)
  }

  useEffect(() => {
    handleAuth()
  }, [])

  return {
    isLoading
  }
}
