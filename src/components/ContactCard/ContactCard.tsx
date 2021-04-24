import React from 'react'
import { Link } from 'react-router-dom'
import { TContact } from '../../features/types'
import styled from 'styled-components'

type TProps = {
  contact: TContact
}

const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  text-decoration: none;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.margins.bottom};
  margin-right: ${({ theme }) => theme.margins.bottom};
  color: ${({ theme }) => theme.colors.accent};
  padding-top: ${({ theme }) => theme.paddings.half};
  :hover {
    transform: scale(1.1);
    transition: transform 0.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }
`

const Name = styled.span``
const Avatar = styled.img`
  width: 70%;
  border-radius: 50%;
`

export function ContactCard({ contact }: TProps): JSX.Element {
  return (
    <Container to={`/contact-details/${contact.id}`}>
      <Avatar src={contact.picture.medium} />
      <Name>
        {contact.name.first} {contact.name.last}
      </Name>
    </Container>
  )
}
