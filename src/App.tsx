import './styles.css'
import DataProvider from './DataProvider'
import HotelReservation from './HotelReservation'
export default function App () {
  return (
    <div className="App">
      <DataProvider>
        <HotelReservation />
      </DataProvider>
    </div>
  )
}
