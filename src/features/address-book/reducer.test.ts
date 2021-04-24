import { ADDRESS_BOOK } from './actions'
import { mockResponse } from './fixtures/test-data'
import { addressBookReducer, TAddressBookState } from './reducer'

const initialState = undefined

describe('addressBookReducer', () => {
  it('updates LOADING to true when REQUEST action is received', () => {
    const nextState: TAddressBookState = addressBookReducer(initialState, {
      type: ADDRESS_BOOK.REQUEST,
    })

    const expectedState: TAddressBookState = {
      loading: true,
      error: false,
      contactList: [],
    }

    expect(nextState).toEqual(expectedState)
  })

  it('correctly handles ADDRESS_BOOK.SUCCESS action', () => {
    const nextState: TAddressBookState = addressBookReducer(initialState, {
      type: ADDRESS_BOOK.SUCCESS,
      payload: mockResponse.results,
    })

    const expectedState: TAddressBookState = {
      loading: false,
      error: false,
      contactList: mockResponse.results,
    }

    expect(nextState).toEqual(expectedState)
  })
})
