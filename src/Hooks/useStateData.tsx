import { type InitData } from '../models'
import { DataService } from '../utils'
import { useContext } from 'react'
import { DataContext } from '../DataProvider'

export default function useStateData (handleDialogClose?: any) {
  // rxjs subject based service instance to inject new data.
  const dataList = useContext<InitData[]>(DataContext)
  // method to update a current reservation.
  const updateReservation = (formValues: InitData) => {
    DataService.changeData(dataList.map((d: InitData) => {
      if (d.id === formValues.id) {
        return formValues
      } else {
        return d
      }
    }))
    handleDialogClose()
  }
  // method to add new reservation
  const addReservation = (formValues: InitData) => {
    const inValid = dataList.find((d) => d.id === formValues.id)
    if (inValid == null) {
      DataService.changeData([...dataList, formValues])
      handleDialogClose()
    }
  }
  // method to delete and existing reservation
  const deleteReservation = (id: number) => {
    DataService.changeData(dataList.filter((d) => d.id !== id))
  }

  return {
    updateReservation,
    addReservation,
    deleteReservation
  }
}
