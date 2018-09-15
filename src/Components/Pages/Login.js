import React, { Component } from 'react';
//  import UserForm from '../Login/Userform'
import PrintList from '../Login/PrintList'
import Logo4u from './../Logo/Logo' // ruta

class Login extends Component {
  render() {
    return (
      <div className="App">
       
       <Logo4u />
        <PrintList />
      </div>

    );
  }
}

export default Login;
