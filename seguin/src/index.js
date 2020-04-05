import React from 'react'
import ReactDOM from 'react-dom'
import './style.scss'

class HelloMessage extends React.Component {
  render() {
    return (
      <div>
        <Niveau2/>
      </div>
    )
  }
}

class Niveau2 extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      nBeads:[],
      nTable:0,
      nTold:0
    }
    this.addBeads = this.addBeads.bind(this)
    this.removeAllBeads = this.removeAllBeads.bind(this)
  }
  addBeads(e, value){
    let nBeads = this.state.nBeads;
    nBeads.push(value);
    this.setState({nBeads})
  }
  removeAllBeads(){
    this.setState({nBeads : []})
  }
  render() {
    const {nBeads} = this.state
    let barres = [...Array(10)].map((e, i) => <Barre n = {i+1} key = {i} addBeads = {this.addBeads}/>)
    let tiles = [...Array(10)].map((e, i) => <Tile n = {i} key = {i}/>)
    let barresPlaced = nBeads.map((n,i) => <Barre n = {n} key = {i}/>)
    return (
      <div className = "container">
        <div className = "container__beads">
          {barres}
        </div>
        <div className = "container__center">
          <AudioButton/>
          <div className = "container__results">
            <div className = "container__bars">
              {barresPlaced}
            </div>
            <div className = "container__table">
              <TableDeSeguin10/>
            </div>
          </div>
          <Buttons removeAllBeads = {this.removeAllBeads}/>
        </div>

        <div className = "container__tiles">
          {tiles}
        </div>
      </div>
    )
  }
}

const AudioButton = (props) => {
    return (
      <div > Reecouter</div>
    )
}
const Buttons = (props) => {
  return (
    <div className = "container__btn-reset">
      <ButtonReset removeAllBeads = {props.removeAllBeads}/>
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
    <div onClick = {removeAllBeads} className = "button"> Effacer</div>
  )
}
const TableDeSeguin10 = (props) => {
  return (
    <div className="table__contour">
      <div className="table__interieur">
        <div className="tile">
          1
        </div>
        <div className="tile">
          0
        </div>
      </div>
    </div>
  )
}

const Tile = (props) => {
  const n = props.n;
  return (
    <div className = "tile tile__unit">
      {n}
    </div>
  )
}

var mountNode = document.getElementById('app')
ReactDOM.render(<HelloMessage name='Jane' />, mountNode)
