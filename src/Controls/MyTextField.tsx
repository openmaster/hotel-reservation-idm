import TextField from '@mui/material/TextField'
import FormHelperText from '@mui/material/FormHelperText'

interface IMyTextField {
  type?: string
  label: string
  name: string
  required?: boolean
  value: string | number
  helperText?: string
  onChange: any
  max?: number
  min?: number
  error?: boolean
  errorMSg?: string
}
export default function MyTextField (props: IMyTextField) {
  const { type = 'text', label, name, value, onChange, errorMSg, error = false, ...others } = props
  console.log({ ...others })
  return (<div>
    <TextField
      type={type}
      name={name}
      label={label}
      value={value}
      error={error}
      sx={{ margin: '20px', minWidth: '10em' }}
      variant="standard"
      {...others}
      InputProps={{
        inputProps: {
          ...others
        }
      }}
      onChange={onChange} />
      { error && <FormHelperText sx={{ marginLeft: '20px', color: 'red' }}>{errorMSg}</FormHelperText> }
      </div>
  )
}
