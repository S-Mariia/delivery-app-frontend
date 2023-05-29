import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from 'App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <BrowserRouter basename="/delivery-app-frontend">
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
