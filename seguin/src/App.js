import React from 'react'
import ReactDOM from 'react-dom'
import { Redirect, Route, Router } from 'react-router-dom';
import Navbar from './Navbar';
import './style.scss'
const cloudFolder = "https://res.cloudinary.com/eclimontessori/video/upload/v1586180865/audio-application-seguin/"

const games = [
  {
    url : "seguin1niveau1",
    name : "Seguin 1 Niveau 1",
    img : "https://res.cloudinary.com/eclimontessori/image/upload/v1586425816/Screen_Shot_2020-04-09_at_11.42.02_AM_tqkrfz.png",
    alt : "jeux numeration Montessori Seguin 1 perles uniquement"
  },
  {
    url : "seguin1niveau2",
    name : "Seguin 1 Niveau 2",
    img : "https://res.cloudinary.com/eclimontessori/image/upload/v1586425816/Screen_Shot_2020-04-09_at_11.42.02_AM_tqkrfz.png",
    alt : "jeux numeration Montessori Seguin 1"
  }
]

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      page: "Seguin1Niveau2"
    }
    this.goTo = this.goTo.bind(this)
  }
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }
  render() {
    return (
      <div>
        <Navbar history = {this.props.history}/>
        <div className = "big-container">
          <h1 className="text-center">Activités Montessori en ligne</h1>
          <h4>Les activités mises en ligne sur ce site ont été faites pour aider à la continuation pédagogique pendant le confinement dû à l'épidémie du COVID-19. Ces jeux n'ont pas à vocation à remplacer le véritable matériel Montessori. Les enfants ont besoin de matériel concret qu'ils peuvent toucher et prendre dans leurs mains. Mais en attendant de pouvoir revenir en classe, ce site propose une alternative en virtualisant une partie du matériel que les enfants ont l'habitude d'utiliser dans leur environnement.</h4>
          <h4>Les activités de ce site sont consues par l'équipe de l'école Montessori de Thonon-les-Bains <a href = "https://eclimontessori.org" target="_blank">(ECLI Montessori)</a> et développées et mises en ligne par Pauline, éducatrice en 6-12, pour répondre aux besoins des élèves de l'école.</h4>
          <h3 className="text-center"> Choisis ton activité</h3>
          <Activities history = {this.props.history}/>
        </div>
      </div>
    )
  }
}

class Activities extends React.Component {

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  render() {
    const allGames = games.map(game => {
      return (
        <div key = {game.url} >
          <button onClick={this.goTo.bind(this, game.url)} className = "flex flex-column flex-align-center">
            <img src = {game.img} alt = {game.alt}></img>
            <h3>{game.name}</h3>
          </button>
        </div>
      )
    })
    return(
      <div className = "games-link-container flex flex-wrap flex-justify-space-between">
        {allGames}
      </div>
    )
  }

}

export default App;
