import React from 'react'
import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
  letter-spacing: -0.05em;
  color: ${({ theme }) => theme.colors.primary};
`

const Container = styled.div`
  text-align: center;
  padding-top: ${({ theme }) => theme.paddings.base};
  padding-bottom: ${({ theme }) => theme.paddings.base};
`

export default function Header() {
  return (
    <Container>
      <H1>
        Address<strong>Book</strong>
      </H1>
    </Container>
  )
}
