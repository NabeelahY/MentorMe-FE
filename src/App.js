import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { connect } from 'react-redux';
import { GlobalStyle } from './styles/GlobalStyle';
import Login from './components/Auth/Login';


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
