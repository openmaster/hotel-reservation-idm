import Button from '@mui/material/Button'
import useStateData from './Hooks/useStateData'

export default function DeleteReservation ({ id }: { id: number }) {
  // custom hook for state manipulation.
  const { deleteReservation } = useStateData()
  return (
        <Button onClick={() => { deleteReservation(id) }}
         sx={{ float: 'right' }} size="small" color="error">
          Delete
        </Button>
  )
}
