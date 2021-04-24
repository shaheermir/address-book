import React from 'react'
import { Link } from 'react-router-dom'
import { TContact } from '../features/types'

type TProps = {
  contact: TContact
}

export default function ContactCard({ contact }: TProps): JSX.Element {
  return (
    <div>
      <Link to={`/contact-details/${contact.id}`}>{contact.name.first}</Link>
    </div>
  )
}
