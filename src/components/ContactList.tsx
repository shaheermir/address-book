import React from 'react'
import { TContact } from '../features/types'
import ContactCard from './ContactCard'

type TProps = {
  contacts: TContact[]
}
function ContactList({ contacts }: TProps) {
  return (
    <div>
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  )
}

export default ContactList
