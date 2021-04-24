import React from 'react'
import { shallow } from 'enzyme'
import { ContactList } from './ContactList'
import contacts from './fixtures.json'

describe('ContactList', () => {
  it('renders contact list', () => {
    const link = shallow(<ContactList contacts={contacts} />)
    expect(link).toMatchSnapshot()
  })
})
