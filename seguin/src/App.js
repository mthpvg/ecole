import React from 'react'
import ReactDOM from 'react-dom'
import { Redirect, Route, Router } from 'react-router-dom';
import Navbar from './Navbar';
import Seguin1Niveau2 from './Seguin1Niveau2';
import './style.scss'
const cloudFolder = "https://res.cloudinary.com/eclimontessori/video/upload/v1586180865/audio-application-seguin/"

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
        <Navbar history = {this.props.history}/>

      </div>
    )
  }
}

export default App;
