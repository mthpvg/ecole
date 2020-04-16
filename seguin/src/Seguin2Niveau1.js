import React from 'react'
import ReactDOM from 'react-dom'
import {audioDizaines} from './audio';
import {animals} from './dinosaurs';
import {AudioButton, ButtonReset, ButtonValid} from './ActivitiesLib';
import Navbar from './Navbar';
import './style.scss'
const cloudFolder = "https://res.cloudinary.com/eclimontessori/video/upload/v1586180865/audio-application-seguin/"
const logo = "https://res.cloudinary.com/eclimontessori/image/upload/v1586343660/logo-small_rfd5z6.png"


class Seguin2Niveau1 extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      nTable:0,
      nTold:0,
      score:0,
      wins:0,
      width:0,
      height:0
    }
    this.play = this.play.bind(this)
    this.setNewNumber = this.setNewNumber.bind(this)
    this.checkResult = this.checkResult.bind(this)
    this.updateDimensions = this.updateDimensions.bind(this)
    this.setnTable = this.setnTable.bind(this)
  }
  componentDidMount(){
    this.setNewNumber();
    window.addEventListener('resize', this.updateDimensions);
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.nTable !== this.state.nTable){
      this.checkResult()
    }
  }
  updateDimensions(){
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  setNewNumber(){
    const numberToFind = Math.floor(Math.random() * 9 ) + 1;
    this.play(numberToFind)
    this.setState({
      nTable:0,
      nTold :numberToFind
    });
  }

  setnTable(e, value){
    this.setState({nTable:value});
  }

  play(n){
    const numberToPlay = Number.isInteger(n) ? n : this.state.nTold;
    const toPlay = new Audio(cloudFolder + audioDizaines[numberToPlay-1]);
    toPlay.play();
  }
  checkResult(){
    const {nTable, nTold} = this.state;
    if (nTable === nTold ) {
      let newScore = this.state.score + 1;
      switch (newScore) {
        case 10:
          let wins = this.state.wins + 1;
          localStorage.setItem('wins-Seg2N1', wins);
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
    } else {
      this.setState({nTable:0})
    }
  }

  render() {
    const {score, wins} = this.state
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
    const boards10to50 = [...Array(5)].map((e, i) => <TableDeSeguin2 ten = {i+1} key = {i+1} unit = {0} setnTable = {this.setnTable}/>)
    const boards60to90 = [...Array(4)].map((e, i) => <TableDeSeguin2 ten = {i+6} key = {i+5} unit = {0} setnTable = {this.setnTable}/>)
    return (
      <div>
        <Navbar history = {this.props.history}/>
        <div className = "container-smallGame flex">
          <div className = "container__half">
            <div>
              <h4>Clique sur l'oreille pour entendre le son. Clique sur le bon nombre.</h4>
              <div className = "container__animalWon">
                {animalWon}
              </div>
            </div>
          </div>
          <div className = "container__half">
            <AudioButton play = {this.play}/>
            <div className = "flex flex-justify-space-between">
              <div className = "container__table flex-column">
                {boards10to50}
              </div>
              <div className = "container__table flex-column flex-grow">
                {boards60to90}
              </div>
            </div>
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


const TableDeSeguin2 = (props) => {
  const {ten, unit, setnTable} = props
  return (
    <div className="table__contour" onClick = {(e) => setnTable(e,ten)}>
      <div className="table__interieur">
        <div className="tile">
          {ten}
        </div>
        <div className="tile">
          {unit}
        </div>
      </div>
    </div>
  )
}




export default Seguin2Niveau1
