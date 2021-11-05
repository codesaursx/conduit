import { PrimaryButton } from '@Components/atoms/buttons/PrimaryButton'
import { Input } from '@Components/atoms/Input'
import { useInput } from '@Hooks/useInput'

export const SignInForm = () => {
  const username = useInput('text')
  const email = useInput('email')
  const password = useInput('password')

  return (
    <form>
      <Input {...username} />
      <Input {...email} />
      <Input {...password} />
      <PrimaryButton text="Sign In" />
    </form>
  )
}
