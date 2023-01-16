import { configureStore, combineReducers } from '@reduxjs/toolkit'
import  { contactReducers}  from './contactSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist'
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'

// const persistConfig = {
//     key: 'root',
//     storage,
//   };

//   const rootReducer = combineReducers({ 
//     addContact: addContact, 
//     deleteContact: deleteContact
//   });
  
//   const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: {
    contacts: contactReducers,
  }
//   ,
// //   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
    // }),
});

export const persistor = persistStore(store)