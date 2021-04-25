import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { TContact, TState } from '../types'
import { loadAddressBook } from './actions'
import AddressBookComponent from './component'
import { selectContactList, selectIsLoading } from './selectors'

interface TSelectedState {
  contacts: TContact[]
  isLoading: boolean
}

const mapStateToProps = createStructuredSelector<TState, TSelectedState>({
  contacts: selectContactList,
  isLoading: selectIsLoading,
})

const mapDispatchToProps = {
  loadAddressBook,
}

export const AddressBook = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressBookComponent)
