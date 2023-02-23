import React, { Component } from 'react';
import './person-details.css';
import SwapiServiceq from '../../services/swapi-service';


export default class PersonDetails extends Component {
  swapiq = new SwapiServiceq()

  state = {data:{}}
  
  _updatePlanet = (id) => {
    this.swapiq.getPlanet(id)
    .then(data => {
      this.setState({data: data})
    })
  }
  
  
  componentDidMount = () => {
    setInterval (() => {
  
    const id = Math.floor(Math.random() * (20 - 1 + 1) + 1)
    this._updatePlanet(id) 
    },3000  )
  }
  
  
  
      // this.swapi.getPlanet(3)
      // .then(data => {
      //   this.setState({data: data})
      // })
  
  
  
  render() {
    const {id, name, gender, birthYear, eyeColor} = this.state.data
    const wwlanetImg =  `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`

    return (
      <div className="person-details card">
        <img className="person-image"
             src={wwlanetImg}/>
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
