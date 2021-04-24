import React from 'react'
import { TContact } from '../types'

type TProps = {
  contact: TContact
}
function ContactDetails({ contact }: TProps) {
  return (
    <div>
      <pre>{JSON.stringify(contact, null, 4)}</pre>
    </div>
  )
}

export default ContactDetails
