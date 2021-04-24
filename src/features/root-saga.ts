import { all, fork } from '@redux-saga/core/effects'
import addressBookSaga from './address-book/saga'

function* rootSaga() {
  // @ts-ignore
  yield all([yield fork(addressBookSaga)])
}

export default rootSaga
