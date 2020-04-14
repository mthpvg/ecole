import React, { Component } from 'react';
import { Redirect, Route, Router, Link } from 'react-router-dom';
import './style.scss'
const logo = "https://res.cloudinary.com/eclimontessori/image/upload/v1586343660/logo-small_rfd5z6.png"
import {Home} from './svg';


class Navbar extends Component {

  render() {
    return (
      <div className="flex flex-justify-space-between">
        <div className = "button small flex flex-column flex-align-center">
          <Link to={`/`}><Home/></Link>
        </div>

        <a href = "https://www.eclimontessori.org" target = "_blank">
          <img style = {{width : "100px"}} src = {logo} alt = "logo ECLI Montessori Thonon"/>
        </a>

      </div>
    )
  }
}

export default Navbar;
