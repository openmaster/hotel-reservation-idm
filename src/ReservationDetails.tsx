import Button from '@mui/material/Button'
import { type InitData } from './models'

import DetailsDialog from './DetailsDialog'
import useDialog from './Hooks/useDialog'
import useStateData from './Hooks/useStateData'
interface IReservationDetails {
  reservation: InitData
}

export default function ReservationDetails ({ reservation }: IReservationDetails) {
  // custom hook to manage dialog operations.
  const {
    openDialog,
    formValues,
    setFormValues,
    handleDialogOpen,
    handleDialogClose
  } = useDialog(reservation)

  // custom hook for state manipulation.
  const { updateReservation } = useStateData(handleDialogClose)

  return (
    <>
      <Button sx={{ float: 'right' }} size="small" onClick={handleDialogOpen}>
        Details
      </Button>
      <DetailsDialog
        formValues={formValues}
        setFormValues={setFormValues}
        openDialog={openDialog}
        handleData={() => { updateReservation(formValues) }}
        handleDialogClose={handleDialogClose}
        addNew={false}
      />
    </>
  )
}
