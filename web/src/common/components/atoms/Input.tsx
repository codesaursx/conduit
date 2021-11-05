import { TInputType } from '@Interfaces/utils.interface'
import { FC } from 'react'

export const Input: FC<Props> = ({ type, placeholder, value, onChange }) => {
  return (
    <fieldset className="form-group">
      <input
        className="form-control form-control-lg"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </fieldset>
  )
}

type Props = {
  type: TInputType
  placeholder: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
