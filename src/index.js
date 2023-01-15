import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PhoneApp from 'components/PhoneApp';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PhoneApp />
        </PersistGate>
    </Provider>
  </React.StrictMode>
);
