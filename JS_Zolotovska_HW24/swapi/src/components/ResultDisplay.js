import React from 'react';

class ResultDisplay extends React.Component {
  render() {
    return <ul id="result">
        <li>Controller: starships</li> 
        <li>ID: 9</li>
        <li>Endpoint: starships/9</li>

        <li>Data:</li> 
        <li>"name": "Death Star",</li>
        <li>"model": "DS-1 Orbital Battle Station",</li>
        <li>"manufacturer": "Imperial Department of Military Research, Sienar Fleet Systems",</li>
        <li>"cost_in_credits": "1000000000000",</li>
        <li>"length": "120000",</li>
        <li>"max_atmosphering_speed": "n/a",</li>
        <li>"crew": "342,953",</li>
        <li>"passengers": "843,342",</li>
        <li>"cargo_capacity": "1000000000000",</li>
        <li>"consumables": "3 years",</li>
        <li>"hyperdrive_rating": "4.0",</li>
        <li>"MGLT": "10",</li>
        <li>"starship_class": "Deep Space Mobile Battlestation",</li>
        <li>"pilots": [],</li>
        <li>"films": [</li>
        <li>"https://swapi.dev/api/films/1/"</li>
        <li>],</li>
        <li>"created": "2014-12-10T16:36:50.509000Z",</li>
        <li>"edited": "2014-12-20T21:26:24.783000Z",</li>
        <li>"url": "https://swapi.dev/api/starships/9/",</li> 
    </ul>
  }
}

export default ResultDisplay;