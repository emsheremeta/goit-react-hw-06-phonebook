import { configureStore, combineReducers } from '@reduxjs/toolkit'
import  {contactSlice}  from './contactSlice'
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
import { filterSlice } from './filterSlice';

const persistConfig = {
    key: 'root',
    storage,
  };

  const rootReducer = combineReducers({ 
    contacts: contactSlice.reducer
  });

  
  const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: {
    contactRoot: persistedReducer,
    filterRoot: filterSlice.reducer
  }
  ,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)