import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { connect } from 'react-redux';
import { GlobalStyle } from './styles/GlobalStyle';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Questions from './components/Questions/Questions';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Signup}/>
        <Route exact path='/questions' component={Questions}/> 
      </Switch>
    </Router>
  );
}

export default App;
