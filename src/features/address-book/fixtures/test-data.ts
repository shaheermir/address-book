import { TState } from '../../types'
import { TResponse } from '../api'

export const mockState: TState = {
  addressBook: {
    contactList: [],
    loading: true,
    error: false,
  },
}

export const mockResponse: TResponse = {
  results: [
    {
      name: {
        title: 'Mr',
        first: 'Randy',
        last: 'Chambers',
      },
      email: 'randy.chambers@example.com',
      phone: '(587)-394-5692',
      picture: {
        large: 'https://randomuser.me/api/portraits/men/7.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/7.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/7.jpg',
      },
    },
    {
      name: {
        title: 'Miss',
        first: 'Alex',
        last: 'Ellis',
      },
      email: 'alex.ellis@example.com',
      phone: '017683 19844',
      picture: {
        large: 'https://randomuser.me/api/portraits/women/89.jpg',
        medium: 'https://randomuser.me/api/portraits/med/women/89.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/women/89.jpg',
      },
    },
  ],
}
