import { connect } from 'react-redux'

import { TState } from '../types'
import ContactDetailsComponent from './component'
import { selectContact } from '../address-book/selectors'

const mapStateToProps = (state: TState, ownProps: any) => {
  const { id } = ownProps.match.params
  return {
    ...ownProps,
    contact: selectContact(id)(state),
  }
}

export const ContactDetails = connect(mapStateToProps)(ContactDetailsComponent)
