// export enum RoomSize {
//   businessSuite = "business-suite",
//   presidentialSuite = "presidential-suite",
// }
export interface PaymentRadioTypes {
  label: string
  value: string
}
export type RoomSize = 'business-suite' | 'presidential-suite'
export type PaymentTypes = 'cash' | 'cc' | 'paypal' | 'bitcoin'
export interface InitData {
  id: number
  stay: {
    arrivalDate: string
    departureDate: string
  }
  room: {
    roomSize: RoomSize
    roomQuantity: number
  }
  firstName: string
  lastName: string
  email: string
  phone: string
  addressStreet: {
    streetName: string
    streetNumber: string
  }
  addressLocation: {
    zipCode: string
    state: string
    city: string
  }
  extras: string[]
  payment: string
  note: string
  tags: string[]
  reminder: boolean
  newsletter: boolean
  confirm: boolean
}
