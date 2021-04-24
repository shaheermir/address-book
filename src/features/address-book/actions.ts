import { TContact } from '../types'

export enum ADDRESS_BOOK {
  REQUEST = 'ADDRESS_BOOK_REQUEST',
  SUCCESS = 'ADDRESS_BOOK_SUCCESS',
  FAILURE = 'ADDRESS_BOOK_FAILURE',
}

export type TAddressBookAction = {
  type: ADDRESS_BOOK
  [payload: string]: any
}

export type TRequestParams = {
  inc?: string
  page?: number
  results?: number
  nat?: string
}

export const loadAddressBook = (params: TRequestParams): TAddressBookAction => ({
  type: ADDRESS_BOOK.REQUEST,
  payload: params,
})

export const addressBookSuccess = (addressBook: TContact[]): TAddressBookAction => ({
  type: ADDRESS_BOOK.SUCCESS,
  payload: addressBook,
})

export const addressBookFailure = (error: any): TAddressBookAction => ({
  type: ADDRESS_BOOK.SUCCESS,
  payload: error,
})
