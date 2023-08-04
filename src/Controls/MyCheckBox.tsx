import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

interface IColorSwitch {
  name: string
  checked: boolean
  label: string
  onChange: any
}

// custom components to keep the logic together and will help us maintain large code and improve readability
export default function MyCheckBox (props: IColorSwitch) {
  const { name, checked, label, onChange } = props
  return (
     <FormControlLabel
        name={name}
        checked={checked}
        onChange={onChange}
        control={<Checkbox defaultChecked />}
        label={label}
      />
  )
}
