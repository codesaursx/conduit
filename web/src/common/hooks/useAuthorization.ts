import { hasToken, isInAuthPath, isInPrivatePath } from '@Helpers/auth'
import { useRouter } from 'next/dist/client/router'

/**
 * Hook which has the logic to redirect when you are logged in or not
 */
export const useAuthorization = () => {
  const router = useRouter()
  const path = router.pathname

  const redirectToHome = () => router.push('/')

  if (!hasToken() && isInPrivatePath(path)) {
    redirectToHome()
    return
  }

  if (hasToken() && isInAuthPath(path)) {
    redirectToHome()
    return
  }
}
