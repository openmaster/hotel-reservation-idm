import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'


import HotelReservation from './HotelReservation'

test('should have search bar and is enabled', () => {
  render(<HotelReservation />)
  const searchBar = screen.getByLabelText(/Search with name or phone number/i)
  expect(searchBar).toBeInTheDocument()
  expect(searchBar).toBeEnabled()
})

test('should have Add new reservation button', () => {
  render(<HotelReservation />)
  const el = screen.getByText(/Add New Reservation/i)
  expect(el).toBeInTheDocument()
  expect(el).toBeEnabled()
})

// test('By Add new reservation button should open a dialog', async () => {
//   render(<HotelReservation />)
//   const el = screen.getByText(/Add New Reservation/i)
//   fireEvent.click(el)
//   expect(await screen.findByRole(/presentation/i))
// })

// test('should have 2 reservations', () => {
//   render(<HotelReservation />)
//   const el = screen.getByRole('list').childElementCount
//   expect(el).toHaveLength(2)
// })
