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
      nombrePerles:[],
      nombreTable:0,
      nombreDit:0
    }
  }
  render() {
    let barres = [...Array(10)].map((e, i) => <Barre n = {i+1} key = {i}/>)
    return (
      <div className = "container">
        <div className = "container__beads">
          {barres}
        </div>
        <div className = "container__table">
          <TableDeSeguin10/>
        </div><div className = "container__tiles">
        </div>
      </div>
    )
  }
}

const Barre = (props) => {
  const n = props.n;
  let fullbarre = [...Array(n)].map((e, i) => <Perle n = {n} key = {i}/>)
  return (
    <div className = "beadsbar">
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

const TableDeSeguin10 = (props) => {
  return (
    <div className="table__contour">
      <div className="table__interieur">
        <div className="table__dizaine">
          <h2 className="text-center">10</h2>
        </div>
      </div>
    </div>
  )
}

var mountNode = document.getElementById('app')
ReactDOM.render(<HelloMessage name='Jane' />, mountNode)
