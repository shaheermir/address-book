import { createSelector } from 'reselect'
import { TContact, TState } from '../types'
import { TAddressBookState } from './reducer'

export const selectAddressBookDomain = (state: TState): TAddressBookState =>
  state.addressBook

export const selectContactList = createSelector(
  selectAddressBookDomain,
  (addressBook) => addressBook.contactList
)

export const selectContact = (id: string) =>
  createSelector(selectContactList, (contacts: TContact[]) =>
    contacts.find((c) => c.id === id)
  )
