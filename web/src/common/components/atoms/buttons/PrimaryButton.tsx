import { FC } from 'react'

export const PrimaryButton: FC<Props> = ({ text }) => {
  return <button className="btn btn-lg btn-primary pull-xs-right">{text}</button>
}

type Props = {
  text: string
}
