import React from 'react'
import { Provider } from 'react-redux'
import { Switch, Route } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

import store from './config/store'
import { Header } from './components/Header/'
import { AddressBook } from './features/address-book/container'
import { ContactDetails } from './features/contact-details/container'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from './config/theme'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Header />
          <Switch>
            <Route exact path='/' component={AddressBook} />
            <Route exact path='/contact-details/:id' component={ContactDetails} />
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  )
}

export default App
