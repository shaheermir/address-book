import React from 'react'
import { useParams } from 'react-router-dom'
import { TContact } from '../types'

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

export default ContactDetails
