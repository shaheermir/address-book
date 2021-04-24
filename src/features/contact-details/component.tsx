import React from 'react'
import { TContact } from '../types'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Field = styled.span`
  margin-bottom: 5px;
`
const Label = styled.span`
  font-weight: bold;
`
const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
`
const Value = styled.span``
const ProfileImage = styled.img`
  width: 150px;
  border-radius: 50%;
  margin-bottom: ${({ theme }) => theme.margins.bottom};
`

type TProps = {
  contact: TContact
}
function ContactDetails({ contact }: TProps) {
  if (!contact) {
    return (
      <Container>
        <p>No User Found =/</p>
      </Container>
    )
  }
  return (
    <Container>
      <ProfileImage src={contact.picture.medium} />

      <Field>
        <Label>Name: </Label>
        <Value>{`${contact.name.first} ${contact.name.last}`}</Value>
      </Field>

      <Field>
        <Label>Phone: </Label>
        <Link href={`tel:${contact.phone}`}>{contact.phone}</Link>
      </Field>

      <Field>
        <Label>Email: </Label>
        <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
      </Field>
    </Container>
  )
}

export default ContactDetails
