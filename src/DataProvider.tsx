import { createContext, useState, useEffect } from 'react'
import { initData } from './data'
import { type InitData } from './models'
import { DataService } from './utils/DataService'

// This component will provide the application state via: Context.
export const DataContext = createContext<InitData[] | []>([])

export default function DataProvider ({ children }: any) {
  const [reservations, setReservations] = useState<InitData[]>(initData)
  useEffect(() => {
    // it is an rxjs based service that injects the data into the state
    // React.useReducer could have also be a good substitude
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
