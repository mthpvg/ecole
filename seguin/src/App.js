import React from 'react'
import ReactDOM from 'react-dom'
import { Redirect, Route, Router } from 'react-router-dom';
import Seguin1Niveau2 from './Seguin1Niveau2';
import './style.scss'
const cloudFolder = "https://res.cloudinary.com/eclimontessori/video/upload/v1586180865/audio-application-seguin/"
const logo = "https://res.cloudinary.com/eclimontessori/image/upload/v1586343660/logo-small_rfd5z6.png"

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      page: "Seguin1Niveau2"
    }
  }
  render() {
    return (
      <div>
        <Navbar/>
        
      </div>
    )
  }
}

const Navbar = (props) => {
  return (
    <div>

      <a href = "https://www.eclimontessori.org" target = "_blank">
        <img style = {{width : "100px"}} src = {logo} alt = "logo ECLI Montessori Thonon"/>
      </a>
    </div>
  )
}

export default App;
