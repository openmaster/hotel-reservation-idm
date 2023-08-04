import Button from '@mui/material/Button'
import DetailsDialog from './DetailsDialog'
import useDialog from './Hooks/useDialog'
import useStateData from './Hooks/useStateData'
import Stack from '@mui/material/Stack'

import { useContext } from 'react'
import { DataContext } from './DataProvider'
import { getNewReservation } from './utils'

export default function AddNewReservation () {
  const dataList = useContext(DataContext)
  const newReservation = getNewReservation(dataList)
  const {
    openDialog,
    formValues,
    setFormValues,
    handleDialogOpen,
    handleDialogClose
  } = useDialog(newReservation)
  const { addReservation } = useStateData(handleDialogClose) // custom hook that use rxjs for state manipulations.

  return (
     <Stack spacing={2} direction="row" justifyContent='center'>
      <Button role="button" name="addNew" variant='contained' sx={{ float: 'right' }} size="small" onClick={handleDialogOpen}>
        Add New Reservation
      </Button>
      <DetailsDialog
        formValues={formValues}
        setFormValues={setFormValues}
        openDialog={openDialog}
        handleData={() => { addReservation(formValues) }}
        handleDialogClose={handleDialogClose}
        addNew={true}
      />
    </Stack>
  )
}
