import React, { useEffect } from 'react'
import ContactList from '../../components/ContactList'
import { TContact } from '../types'
import { TRequestParams } from './actions'

type PropTypes = {
  loadAddressBook: (params: TRequestParams) => void
  contacts: TContact[]
}
function AddressBook({ loadAddressBook, contacts }: PropTypes): JSX.Element {
  useEffect(() => {
    loadAddressBook({
      numberOfResults: 50,
      seed: 'abc',
      include: 'name,phone,picture,email',
    })
  }, [])
  return (
    <div>
      <p>AddressBook</p>
      <ContactList contacts={contacts} />
    </div>
  )
}

export default AddressBook
