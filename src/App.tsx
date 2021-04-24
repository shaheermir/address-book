import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

import store from './config/store'
import AddressBook from './features/address-book/container'
import Header from './components/Header'
import ContactDetails from './features/contact-details/component'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={AddressBook} />
          <Route exact path='/contact-details/:id' component={ContactDetails} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
