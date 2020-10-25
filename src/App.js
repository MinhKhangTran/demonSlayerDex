import React from 'react';
import { Home, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <AuthWrapper>
<Router>
      <Switch>
        <PrivateRoute exact path="/">
          <Home></Home>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="*">
          <Error></Error>
        </Route>
    </Switch>
    </Router>
    </AuthWrapper>
    
  );
}

export default App;
