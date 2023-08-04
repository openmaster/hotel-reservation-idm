import Search from './Search'
import SearchResults from './SearchResults'
import { useState, useContext } from 'react'
import { type InitData } from './models'
import { DataContext } from './DataProvider'
import AddNewReservation from './AddNewReservation'

export default function HotelReservation () {
  const dataList = useContext<InitData[]>(DataContext)
  const [searchedTxt, setSearchedTxt] = useState<string>('')
  const searchedList = handleSearch(searchedTxt)

  function handleSearch (txt: string) {
    return dataList.filter((d) =>
      d.firstName.toLocaleLowerCase().includes(txt.toLocaleLowerCase()) ||
      d.lastName.toLocaleLowerCase().includes(txt.toLocaleLowerCase()) ||
      d.phone.includes(txt)
    )
  }
  return (
    <div>
      <h3>Hotel Reservation</h3>
      <Search txt={searchedTxt} handleOnChange={setSearchedTxt} />
      <SearchResults reservations={searchedList} />
      <AddNewReservation />
    </div>
  )
}
