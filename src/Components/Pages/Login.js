import React, { Component } from 'react';
import UserForm from '../Login/Userform'
import PrintList from '../Login/PrintList'

class Login extends Component {
  render() {
    return (
      <div className="App">
       
        <UserForm />
        <PrintList />
      </div>

    );
  }
}

export default Login;
