import React from 'react'
import { shallow } from 'enzyme'
import { ContactCard } from './ContactCard'
import contacts from '../ContactList/fixtures.json'

describe('ContactCard', () => {
  it('renders contact', () => {
    const link = shallow(<ContactCard contact={contacts[0]} />)
    expect(link).toMatchSnapshot()
  })
})
