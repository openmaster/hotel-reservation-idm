import { alpha, styled } from '@mui/material/styles'
import { pink } from '@mui/material/colors'
import Switch from '@mui/material/Switch'

import FormControlLabel from '@mui/material/FormControlLabel'

const PinkSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[800],
    '&:hover': {
      backgroundColor: alpha(pink[800], theme.palette.action.hoverOpacity)
    }
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[800]
  }
}))

interface IColorSwitch {
  name: string
  checked: boolean
  label: string
  onChange: any
}
export default function MyColorSwitch (props: IColorSwitch) {
  const { name, checked, label, onChange } = props
  return (
     <FormControlLabel
        name={name}
        checked={checked}
        onChange={onChange}
        control={<PinkSwitch defaultChecked />}
        label={label}
      />
  )
}
