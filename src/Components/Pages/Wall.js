import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WallComments from '../Wall/WallComment'
import Logo4u from './../Logo/Logo'


class Wall extends Component {
  render() {
    return (
      <div className="App">

<Logo4u />
      
      <WallComments />

   
    </div>

    );
  }
}


export default Wall;