import React from 'react';
import './style.css';

const Logo = (props) => {
  return (
    <img src={props.photo} className="logoReact"/>
  )
}

export default Logo;