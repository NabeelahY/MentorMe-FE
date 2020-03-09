import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import { Home } from './components/Questions';
import Details from './components/Questions/Details';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/register'>
          <Signup />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/questions/:id'>
          <Details />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
