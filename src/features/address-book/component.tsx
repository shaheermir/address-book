import React, { useEffect } from 'react'
import styled from 'styled-components'
import { ContactList } from '../../components/ContactList'
import { Spinner } from '../../components/Spinner'
import { TContact } from '../types'
import { TRequestParams } from './actions'

type PropTypes = {
  loadAddressBook: (params: TRequestParams) => void
  contacts: TContact[]
  isLoading: boolean
}
const Container = styled.div`
  max-width: 95%;
  margin: 0 auto;
  text-align: center;
`

function AddressBook({ loadAddressBook, contacts, isLoading }: PropTypes): JSX.Element {
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

  if (isLoading) return <Spinner />

  return (
    <Container>
      <ContactList contacts={contacts} />
    </Container>
  )
}

export default AddressBook
