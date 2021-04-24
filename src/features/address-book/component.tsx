import React, { useEffect } from 'react'
import styled from 'styled-components'
import { ContactList } from '../../components/ContactList'
import { TContact } from '../types'
import { TRequestParams } from './actions'

type PropTypes = {
  loadAddressBook: (params: TRequestParams) => void
  contacts: TContact[]
}
const Container = styled.div`
  max-width: 95%;
  margin: 0 auto;
`
function AddressBook({ loadAddressBook, contacts }: PropTypes): JSX.Element {
  useEffect(() => {
    if (!contacts?.length) {
      loadAddressBook({
        page: 1,
        results: 72,
        nat: 'gb,us',
        inc: 'name,phone,picture,email',
      })
    }
  }, [])
  return (
    <Container>
      <ContactList contacts={contacts} />
    </Container>
  )
}

export default AddressBook
