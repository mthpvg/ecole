import React from 'react'
import ReactDOM from 'react-dom'
import {Ear, Eraser, Check} from './svg';

import './style.scss'

export const Barre = (props) => {
  const {n, addBeads} = props;
  let fullbarre = [...Array(n)].map((e, i) => <Perle n = {n} key = {i}/>)
  return (
    <div className = "beadsbar" onClick = {(e) => props.addBeads(e, n)}>
    {fullbarre}
    </div>
  )
}

export const Perle = (props) => {
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

export const AudioButton = (props) => {
    return (
      <div className="button flex flex-justify-center" onClick = {props.play}>
        <Ear/>
      </div>
    )
}

export const ButtonReset = (props) => {
  const {removeAllBeads} = props;
  return (
    <div onClick = {removeAllBeads} className = "button">
      <Eraser/>
    </div>
  )
}

export const ButtonValid = (props) => {
  return (
    <div className="button" onClick = {props.checkResult}> <Check/> </div>
  )
}
