import { configureStore } from '@reduxjs/toolkit'
import { contactReducer, filterReducer } from './reducer'


const store = configureStore({
  reducer: {
   contacts: contactReducer,
   filter: filterReducer
  },
});

export default store