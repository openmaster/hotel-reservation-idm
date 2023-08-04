import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { type PaymentRadioTypes } from '../models'
import { pink } from '@mui/material/colors'

interface IMyRadioGroup {
  name: string
  label: string
  value: string
  onChange: any
  items: PaymentRadioTypes[]
}

// custom components to keep the logic together and will help us maintain large code and improve readability
export default function MyRadioGroup (props: IMyRadioGroup) {
  const { name, label, value, onChange, items } = props
  return (
    <FormControl sx={{ margin: '20px' }} >
      <FormLabel id="demo-radio-buttons-group-label">{label}</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        name={name}
        value={value}
        onChange={onChange}
      >
        {items.map((item: PaymentRadioTypes, index: number) => (
          <FormControlLabel
            key={index}
            value={item.value}
            control={<Radio sx={{ color: pink[800], '&.Mui-checked': { color: pink[600] } }}
          />}
            label={item.label}
          />
        ))}
      </RadioGroup>
    </FormControl>
  )
}
