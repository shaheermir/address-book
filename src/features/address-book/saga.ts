import { all, call, put, takeLatest } from 'redux-saga/effects'
import { TContact } from '../types'
import {
  addressBookFailure,
  addressBookSuccess,
  ADDRESS_BOOK,
  TAddressBookAction,
} from './actions'
import { fetchAddressBookAPI, TResponse } from './api'

const transformData = (contacts: TContact[]) =>
  contacts.map((c, i) => ({
    ...c,
    id: `${i}-${c.name.first.toLowerCase()}-${c.name.last.toLowerCase()}`,
  }))

function* loadAddressBookSaga(action: TAddressBookAction) {
  try {
    const data: TResponse = yield call(fetchAddressBookAPI, action.payload)
    yield put(addressBookSuccess(transformData(data.results)))
  } catch (error) {
    yield put(addressBookFailure(error.message))
  }
}

function* onLoadAddressBookStart() {
  yield takeLatest(ADDRESS_BOOK.REQUEST, loadAddressBookSaga)
}

export default function* addressBookSaga() {
  yield all([call(onLoadAddressBookStart)])
}
