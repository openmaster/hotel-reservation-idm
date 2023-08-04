import { type InitData } from '../models'

export const initData: InitData[] = [
  {
    id: 1,
    stay: {
      arrivalDate: '2021-11-18T05:00:00.000Z',
      departureDate: '2021-11-25T05:00:00.000Z'
    },
    room: {
      roomSize: 'business-suite',
      roomQuantity: 3
    },
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.test@idm.com',
    phone: '2895239999',
    addressStreet: {
      streetName: 'IDM Street',
      streetNumber: '1234'
    },
    addressLocation: {
      zipCode: '123456',
      state: 'Arizona',
      city: 'OAKVILLE'
    },
    extras: [
      'extraBreakfast',
      'extraTV',
      'extraWiFi',
      'extraParking',
      'extraBalcony'
    ],
    payment: 'cc',
    note: 'idm lab test',
    tags: ['hotel', 'booking', 'labtest'],
    reminder: true,
    newsletter: true,
    confirm: false
  },
  {
    id: 2,
    stay: {
      arrivalDate: '2021-11-01T04:00:00.000Z',
      departureDate: '2021-11-04T04:00:00.000Z'
    },
    room: {
      roomSize: 'presidential-suite',
      roomQuantity: 2
    },
    firstName: 'romi',
    lastName: 'SKK',
    email: 'romi.op@idm.com',
    phone: '9059042356',
    addressStreet: {
      streetName: 'IDM',
      streetNumber: '1234'
    },
    addressLocation: {
      zipCode: '123456',
      state: 'Arkansas',
      city: 'OAK'
    },
    extras: ['extraParking', 'extraBalcony'],
    payment: 'cash',
    note: 'lab test 3',
    tags: ['angular', 'material', 'labtest'],
    reminder: true,
    newsletter: false,
    confirm: true
  }
]

export const newReservation: InitData = {
  id: 1,
  stay: {
    arrivalDate: new Date().toISOString(),
    departureDate: new Date().toISOString()
  },
  room: {
    roomSize: 'business-suite',
    roomQuantity: 1
  },
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  addressStreet: {
    streetName: '',
    streetNumber: ''
  },
  addressLocation: {
    zipCode: '',
    state: '',
    city: ''
  },
  extras: [
    'extraBreakfast',
    'extraTV',
    'extraWiFi',
    'extraParking',
    'extraBalcony'
  ],
  payment: 'cc',
  note: '',
  tags: ['hotel', 'booking', 'labtest'],
  reminder: true,
  newsletter: true,
  confirm: false
}
