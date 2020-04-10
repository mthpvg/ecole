import React from 'react'
import ReactDOM from 'react-dom'
import audio from './audio';
import {animals, Cat} from './animals';
import {Barre, Perle, AudioButton, ButtonReset, ButtonValid} from './ActivitiesLib';

import Navbar from './Navbar';
import './style.scss';
import './style-smallGame.scss'

const cloudFolder = "https://res.cloudinary.com/eclimontessori/video/upload/v1586180865/audio-application-seguin/"
const logo = "https://res.cloudinary.com/eclimontessori/image/upload/v1586343660/logo-small_rfd5z6.png"


class Seguin1Niveau1 extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      nBeads:[0,0],
      nTold:0,
      score:0,
      wins:0,
      width:0,
      height:0
    }
    this.addBeads = this.addBeads.bind(this)
    this.removeAllBeads = this.removeAllBeads.bind(this)
    this.play = this.play.bind(this)
    this.setNewNumber = this.setNewNumber.bind(this)
    this.checkResult = this.checkResult.bind(this)
    this.updateDimensions = this.updateDimensions.bind(this)

  }
  componentDidMount(){
    this.setNewNumber();
    window.addEventListener('resize', this.updateDimensions);
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.nTold  !== this.state.nTold){
      this.play()
    }
  }
  updateDimensions(){
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  setNewNumber(){
    const numberToFind = Math.floor(Math.random() * 10 )+10;
    this.setState({
      nBeads:[0,0],
      nTold :numberToFind
    });
  }
  addBeads(e, value){
    let nBeads = this.state.nBeads;
    switch (value) {
      case 10:
        nBeads[0] = 10;
        break;
      default:
        nBeads[1] = value
    }
    this.setState({nBeads})
  }
  removeAllBeads(){
    this.setState({nBeads : []})
  }

  play(){
    const n = this.state.nTold-10;
    const toPlay = new Audio(cloudFolder + audio[n]);
    toPlay.play();
  }
  checkResult(){
    const {nBeads, nTold} = this.state;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sumBeads = nBeads.reduce(reducer);
    if (sumBeads === nTold ) {
      let newScore = this.state.score + 1;
      switch (newScore) {
        case 10:
          let wins = this.state.wins + 1;
          this.setState({
            score : 0,
            wins
          })
          this.setNewNumber()
          break;
        default:
          this.setState({score : newScore});
          this.setNewNumber()
      }
    }
  }

  render() {
    const {nBeads, score, wins} = this.state
    let barres = [...Array(10)].map((e, i) => <Barre n = {i+1} key = {i} addBeads = {this.addBeads}/>)
    let barresPlaced = nBeads.map((n,i) => <Barre n = {n} key = {i}/>);
    const position = score * 10;
    const style_position = {left : position+"%"};
    const maxHeight = window.innerHeight;
    const windowsWidth = window.innerWidth;
    const animal = animals[wins];
    const animalWon = animals.slice(0,wins);
    let animalsHeight = 60;
    if (windowsWidth < 768) {
      animalsHeight = 30
    }
    return (
      <div>
        <Navbar history = {this.props.history}/>
        <div className = "container-smallGame flex flex-wrap">
          <div className = "container__half">
            <div>
              <h4>Clique sur l'oreille pour entendre le son. Clique sur les perles pour former ce nombre, puis valide.</h4>
              <div className = "container__animalWon">
                {animalWon}
              </div>
            </div>
            <div className = "container__beads">
              {barres}
            </div>
          </div>
          <div className = "container__half flex flex-column flex-justify-center">
            <AudioButton play = {this.play}/>
            <div className = "container__bars flex-justify-center">
              {barresPlaced}
            </div>
            <Buttons removeAllBeads = {this.removeAllBeads} checkResult = {this.checkResult}/>
          </div>
        </div>
        <div className = "container__bottom">
          <div className = "animal_position" style = {style_position}>
            {animal}
          </div>
        </div>
      </div>
    )
  }
}

const Buttons = (props) => {
  return (
    <div className = "flex flex-justify-center ">
      <ButtonReset removeAllBeads = {props.removeAllBeads}/>
      <ButtonValid checkResult = {props.checkResult}/>
    </div>
  )
}

export default Seguin1Niveau1
