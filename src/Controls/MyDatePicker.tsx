import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import dayjs, { type Dayjs } from 'dayjs'

interface IMyDatePicker {
  value: Dayjs | string | null
  label: string
  onChange: any
  minDate?: any
  disabled?: boolean
}
export default function MyDatePicker (props: IMyDatePicker) {
  const { value, label, onChange, minDate, disabled = false } = props
  return (
     <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={dayjs(value)}
          disabled={disabled}
          onChange={onChange}
          label={label}
          minDate={dayjs(minDate)}
          sx={{ margin: '20px' }}
        />
    </LocalizationProvider>

  )
}
