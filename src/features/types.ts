import { TAddressBookState } from './address-book/reducer'

export type TContact = {
  id?: string
  email: string
  phone: string
  picture: {
    large: string
    thumbnail: string
    medium: string
  }
  name: {
    title: string
    first: string
    last: string
  }
}

export type TState = {
  addressBook: TAddressBookState
}
