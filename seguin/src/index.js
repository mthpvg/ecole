import React from 'react'
import ReactDOM from 'react-dom'
import Seguin1Niveau2 from './Seguin1Niveau2';
import './style.scss'
const cloudFolder = "https://res.cloudinary.com/eclimontessori/video/upload/v1586180865/audio-application-seguin/"
const logo = "https://res.cloudinary.com/eclimontessori/image/upload/v1586343660/logo-small_rfd5z6.png"

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        <a href = "https://www.eclimontessori.org" target = "_blank">
          <img style = {{width : "100px"}} src = {logo} alt = "logo ECLI Montessori Thonon"/>
        </a>
        <Seguin1Niveau2/>
      </div>
    )
  }
}


var mountNode = document.getElementById('app')

ReactDOM.render(<HelloMessage/>, mountNode)
