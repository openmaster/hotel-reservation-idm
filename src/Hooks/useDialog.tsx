import { useState } from 'react'
import { type InitData } from '../models'

// custom Hook to handle dialog and form functionality and reused for other dialogs with forms.
export default function useDialog (reservation: InitData) {
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [formValues, setFormValues] = useState<InitData>(reservation)

  const handleDialogOpen = () => {
    setOpenDialog(true)
    setFormValues(reservation)
  }

  const handleDialogClose = () => {
    setOpenDialog(false)
  }
  return {
    openDialog,
    formValues,
    setFormValues,
    handleDialogOpen,
    handleDialogClose
  }
}
