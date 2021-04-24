import React from 'react'
import { TContact } from '../features/types'
import ContactCard from './ContactCard'
import styled from 'styled-components'

type TProps = {
  contacts: TContact[]
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

function ContactList({ contacts }: TProps) {
  return (
    <Container>
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </Container>
  )
}

export default ContactList
