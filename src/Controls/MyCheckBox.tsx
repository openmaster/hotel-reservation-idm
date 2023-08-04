import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

interface IColorSwitch {
  name: string
  checked: boolean
  label: string
  onChange: any
}
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
