import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// import userEvent from '@testing-library/user-event'
// import userEvent from '@testing-library/user-event'
import AddNewReservation from './AddNewReservation'

test('should have Add new reservation button', () => {
  render(<AddNewReservation />)
  const el = screen.getByText(/Add New Reservation/i)
  expect(el).toBeInTheDocument()
  expect(el).toBeEnabled()
})

// test('By Add new reservation button should open a dialog', async () => {
//   const user = userEvent.setup()
// render(<AddNewReservation />)

// fireEvent.click(screen.getByRole('button', { name: 'Add New Reservation' }))
//   fireEvent.click(el)
//   expect(await screen.findByRole(/presentation/i))
// })

// test('should have 2 reservations', () => {
//   render(<HotelReservation />)
//   const el = screen.getByRole('list').childElementCount
//   expect(el).toHaveLength(2)
// })
