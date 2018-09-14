import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WallComments from '../Wall/WallComment'



class Wall extends Component {
  render() {
    return (
      <div className="App">
      
      <WallComments />

   
    </div>

    );
  }
}


export default Wall;