import { combineReducers } from 'redux'
import { addressBookReducer } from './address-book/reducer'

export default combineReducers({ addressBook: addressBookReducer })
