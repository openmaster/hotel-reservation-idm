import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByRole('button', { name: 'me' })
  expect(linkElement).toBeInTheDocument()
  fireEvent.click(linkElement)
  expect(screen.getByText('rocky')).toBeInTheDocument()
})
