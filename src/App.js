import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import { Home } from './components/Questions';
import Details from './components/Questions/Details';
import QuestionConvo from './components/Convo/QuestionConvo';
import ProtectedRoutes from './utils/ProtectedRoutes';
import Dashboard from './components/User/Dashboard';

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
        <ProtectedRoutes exact path='/'>
          <Home />
        </ProtectedRoutes>
        <ProtectedRoutes exact path='/questions/:id'>
          <Details />
        </ProtectedRoutes>
        <ProtectedRoutes exact path='/convo/:id'>
          <QuestionConvo />
        </ProtectedRoutes>
        <ProtectedRoutes exact path='/dashboard'>
          <Dashboard />
        </ProtectedRoutes>
      </Switch>
    </Router>
  );
}

export default App;
