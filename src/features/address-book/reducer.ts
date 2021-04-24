import { createReducer, TAction } from '../../utils/create-reducer'
import { TContact } from '../types'
import { ADDRESS_BOOK } from './actions'

export type TAddressBookState = {
  loading: boolean
  error: boolean
  contactList: TContact[]
}

export const initialState: TAddressBookState = {
  loading: false,
  error: false,
  contactList: [],
}

const addressBookRequest = (state: TAddressBookState): TAddressBookState => ({
  ...state,
  error: false,
  loading: true,
})

const addressBookSuccess = (
  state: TAddressBookState,
  action: TAction
): TAddressBookState => ({
  ...state,
  loading: false,
  error: false,
  contactList: action.payload,
})

const addressBookFailure = (state: TAddressBookState): TAddressBookState => ({
  ...state,
})

const handlers = {
  [ADDRESS_BOOK.REQUEST]: addressBookRequest,
  [ADDRESS_BOOK.SUCCESS]: addressBookSuccess,
  [ADDRESS_BOOK.FAILURE]: addressBookFailure,
}
export const addressBookReducer = createReducer(initialState, handlers)
