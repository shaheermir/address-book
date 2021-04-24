import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { TContact, TState } from '../types'
import { loadAddressBook } from './actions'
import AddressBook from './component'
import { selectContactList } from './selectors'

interface TSelectedState {
  contacts: TContact[]
}

const mapStateToProps = createStructuredSelector<TState, TSelectedState>({
  contacts: selectContactList,
})

const mapDispatchToProps = {
  loadAddressBook,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressBook)
