import React from 'react';
import fire from './config/Fire';
import Articles from './Articles.js';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';
import Signup from './Signup.js';
import LoginForm from './LoginForm.js';

class Login extends React.Component {

render() {
  return (
    <BrowserRouter>
    <Switch>
    <Route path='/login' exact component={LoginForm} />
    <Route path='/signup' exact component={Signup} />
    </Switch>
    </BrowserRouter>
    )
}
}

export default Login;