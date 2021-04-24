import { expectSaga } from 'redux-saga-test-plan'
import * as matchers from 'redux-saga-test-plan/matchers'

import { ADDRESS_BOOK } from './actions'
import { fetchAddressBookAPI } from './api'
import { loadAddressBookSaga } from './saga'
import { mockResponse, mockState } from './fixtures/test-data'

describe('loadAddressBookSaga', () => {
  it('fetches conacts and puts to redux store', () =>
    expectSaga(loadAddressBookSaga, { type: ADDRESS_BOOK.REQUEST })
      .withState(mockState)
      .provide([[matchers.call.fn(fetchAddressBookAPI), mockResponse]])
      .put.like({
        action: {
          type: ADDRESS_BOOK.SUCCESS,
        },
      })
      .silentRun())
})
