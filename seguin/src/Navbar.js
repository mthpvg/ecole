import React, { Component } from 'react';
import { Redirect, Route, Router, Link } from 'react-router-dom';
import './style.scss'
const logo = "https://res.cloudinary.com/eclimontessori/image/upload/v1586343660/logo-small_rfd5z6.png"
import {Home} from './svg';
import {stones} from './stones'

class Navbar extends Component {

  render() {
    const {medals} = this.props;
    console.log(stones.slice(0,medals));
    const medalsShowed = medals ? stones.slice(0,medals).map(stone => stone.svg) : ""
    return (
      <div className="flex flex-justify-space-between small">
        <div className = "button small flex flex-column flex-align-center">
          <Link to={`/`}><Home/></Link>
        </div>
        {medalsShowed}
        <a href = "https://www.eclimontessori.org" target = "_blank">
          <img style = {{width : "100px"}} src = {logo} alt = "logo ECLI Montessori Thonon"/>
        </a>

      </div>
    )
  }
}

export default Navbar;
