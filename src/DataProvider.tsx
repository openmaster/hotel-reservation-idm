import { createContext, useState, useEffect } from 'react'
import { initData } from './data'
import { type InitData } from './models'
import { DataService } from './utils/DataService'

export const DataContext = createContext<InitData[] | []>([])
// using Rxjs to update state
export default function DataProvider ({ children }: any) {
  const [reservations, setReservations] = useState<InitData[]>(initData)
  useEffect(() => {
    DataService.onData().subscribe((data: any) => {
      if (Array.isArray(data)) {
        setReservations([...data])
      } else {
        setReservations(initData)
      }
    })
  }, [])
  return (
    // using context to provide state to rest of the application
    <DataContext.Provider value={reservations}>{children}</DataContext.Provider>
  )
}
