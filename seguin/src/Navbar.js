import React, { Component } from 'react';
import './style.scss'
const logo = "https://res.cloudinary.com/eclimontessori/image/upload/v1586343660/logo-small_rfd5z6.png"


class Navbar extends Component {

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  render() {

    return (
      <div>
        <a href = "https://www.eclimontessori.org" target = "_blank">
          <img style = {{width : "100px"}} src = {logo} alt = "logo ECLI Montessori Thonon"/>
        </a>
        
      </div>
    )
  }
}

export default Navbar;
