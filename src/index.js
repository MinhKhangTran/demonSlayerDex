import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AppProvider} from "./context"
import {Auth0Provider} from "@auth0/auth0-react"
// dev-ntqtqir6.eu.auth0.com
// aiLZaKO8dv2keVtuaaJxgmCLpPs3VqAq
ReactDOM.render(
  <React.StrictMode>
  <Auth0Provider
   domain="dev-ntqtqir6.eu.auth0.com"
        clientId="aiLZaKO8dv2keVtuaaJxgmCLpPs3VqAq"
        redirectUri={window.location.origin}
        cacheLoaction="localstorage">
  <AppProvider>

    <App />
  </AppProvider>
  </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


