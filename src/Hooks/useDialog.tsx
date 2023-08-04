import { useState } from 'react'
import { type InitData } from '../models'

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
