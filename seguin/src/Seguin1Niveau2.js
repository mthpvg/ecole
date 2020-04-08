import React from 'react'
import ReactDOM from 'react-dom'
import audio from './audio';
import {Ear, Eraser, Check} from './svg';
import {animals, Cat} from './animals'
import './style.scss'
const cloudFolder = "https://res.cloudinary.com/eclimontessori/video/upload/v1586180865/audio-application-seguin/"
const logo = "https://res.cloudinary.com/eclimontessori/image/upload/v1586343660/logo-small_rfd5z6.png"

class Seguin1Niveau2 extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      nBeads:[0,0],
      nTable:0,
      nTold:0,
      score:0,
      wins:0,
      width:0,
      height:0
    }
    this.addBeads = this.addBeads.bind(this)
    this.removeAllBeads = this.removeAllBeads.bind(this)
    this.addTile = this.addTile.bind(this)
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
      nTable:0,
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
  addTile(e, value){
    this.setState({nTable:value})
  }
  play(){
    const n = this.state.nTold-10;
    const toPlay = new Audio(cloudFolder + audio[n]);
    toPlay.play();
  }
  checkResult(){
    const {nBeads, nTable, nTold} = this.state;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const sumBeads = nBeads.reduce(reducer);
    const sumTile = nTable + 10;
    if (sumTile === sumBeads && sumBeads === nTold ) {
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
    let tiles = [...Array(10)].map((e, i) => <Tile n = {i} key = {i} addTile = {this.addTile}/>)
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
        <div className = "container">
          <div className = "container__left">
            <div>
              <h4>Clique sur l'oreille pour entendre le son. Clique sur les perles et le chiffre des unités, puis valide.</h4>
              <div className = "container__animalWon">
                {animalWon}
              </div>
            </div>
            <div className = "container__beads">
              {barres}
            </div>
          </div>
          <div className = "container__center">
            <AudioButton play = {this.play}/>
            <div className = "container__results">
              <div className = "container__bars">
                {barresPlaced}
              </div>
              <div className = "container__table">
                <TableDeSeguin10 tile = {this.state.nTable}/>
              </div>
            </div>
            <Buttons removeAllBeads = {this.removeAllBeads} checkResult = {this.checkResult}/>
          </div>

          <div className = "container__tiles" style = {{maxHeight : maxHeight - animalsHeight}}>
            {tiles}
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

const ButtonValid = (props) => {
  return (
    <div className="button" onClick = {props.checkResult}> <Check/> </div>
  )
}

const AudioButton = (props) => {
    return (
      <div className="button" onClick = {props.play}>
        <Ear/>
      </div>
    )
}
const Buttons = (props) => {
  return (
    <div className = "container__buttons">
      <ButtonReset removeAllBeads = {props.removeAllBeads}/>
      <ButtonValid checkResult = {props.checkResult}/>
    </div>
  )
}
const Barre = (props) => {
  const {n, addBeads} = props;
  let fullbarre = [...Array(n)].map((e, i) => <Perle n = {n} key = {i}/>)
  return (
    <div className = "beadsbar" onClick = {(e) => props.addBeads(e, n)}>
    {fullbarre}
    </div>
  )
}

const Perle = (props) => {
  const n = props.n;
  const colors = ["#D61717","#046913","#FAC2F6","#FFE200","#00E4F9","#A43CF5","#FFFFFF","#643203","#021FAE","#DBBF40"]
  let styles = {
      backgroundColor: colors[n-1],
    };
  return (
    <div className = "bead" style={styles}>
    </div>
  )
}

const ButtonReset = (props) => {
  const {removeAllBeads} = props;
  return (
    <div onClick = {removeAllBeads} className = "button">
      <Eraser/>
    </div>
  )
}

const TableDeSeguin10 = (props) => {
  const {tile} = props
  return (
    <div className="table__contour">
      <div className="table__interieur">
        <div className="tile">
          1
        </div>
        <div className="tile">
          {tile}
        </div>
      </div>
    </div>
  )
}

const Tile = (props) => {
  const {addTile, n} = props;
  return (
    <div className = "tile tile__unit" onClick = {(e) => props.addTile(e, n)}>
      {n}
    </div>
  )
}


export default Seguin1Niveau2
