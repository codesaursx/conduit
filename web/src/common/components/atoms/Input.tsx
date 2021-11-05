export const Input = ({ type, placeholder, value, onChange }) => {
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
