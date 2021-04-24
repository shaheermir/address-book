import { createSelector } from 'reselect'
import { path } from 'ramda'
import { TState } from '../types'
import { TAddressBookState } from './reducer'

export const selectAddressBookDomain = (state: TState): TAddressBookState =>
  state.addressBook

export const selectContactList = createSelector(
  selectAddressBookDomain,
  path(['contactList'])
)
