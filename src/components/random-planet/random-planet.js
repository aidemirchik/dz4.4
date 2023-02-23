import React, { Component } from 'react';
import './random-planet.css';
import SwapiService from '../../services/swapi-service';

export default class RandomPlanet extends Component {
swapi = new SwapiService()

state = {data:{}}

_updatePlanet = (id) => {
  this.swapi.getPlanet(id)
  .then(data => {
    this.setState({data: data})
  })
}


componentDidMount = () => {
    const id = Math.floor(Math.random() * (20 - 1 + 1) + 1)
      this._updatePlanet(id)
}

  render() {

    // this.swapi.getPlanet(3)
    // .then(data => {
    //   this.setState({data: data})
    // })


    const {id, name, population, rotationPeriod, diameter} = this.state.data
    const planetImg =  `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`

    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
            src={planetImg}/>
            <button onClick={()=>this.componentDidMount()}>Swipe</button>
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}