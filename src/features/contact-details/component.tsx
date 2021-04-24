import React from 'react'
import { useParams } from 'react-router-dom'

function ContactDetails() {
  const { id } = useParams<{ id: string }>()
  return (
    <div>
      {id}
      <p>ContactDetails</p>
    </div>
  )
}

export default ContactDetails
