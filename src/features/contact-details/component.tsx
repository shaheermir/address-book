import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectContact } from '../address-book/selectors'
import { TContact, TState } from '../types'

type TProps = {
  contact: TContact
}
function ContactDetails({ contact }: TProps) {
  const { id } = useParams<{ id: string }>()
  return (
    <div>
      {id}
      <p>ContactDetails</p>
      <pre>{JSON.stringify(contact, null, 4)}</pre>
    </div>
  )
}

const mapStateToProps = (state: TState, ownProps: any) => {
  const { id } = ownProps.match.params
  return {
    ...ownProps,
    contact: selectContact(id)(state),
  }
}
export default connect(mapStateToProps)(ContactDetails)
