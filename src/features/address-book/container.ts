import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { loadAddressBook } from './actions'
import AddressBook from './component'
import { selectContactList } from './selectors'

const mapStateToProps = createStructuredSelector({
  // @ts-ignore
  contacts: selectContactList,
})

const mapDispatchToProps = {
  loadAddressBook,
}

// @ts-ignore
export default connect(mapStateToProps, mapDispatchToProps)(AddressBook)
