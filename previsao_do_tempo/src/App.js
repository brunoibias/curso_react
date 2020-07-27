import React from 'react';
import axios from 'axios';

const API = 'https://api.hgbrasil.com/weather?woeid=455861&format=json-cors&locale=pt';

// utilizando uma API
export default class App extends React.Component {

  state = {
    city: '',
    forecast: [],
    results: {}
  };

  componentDidMount() {
    axios.get(API)
      .then(({ data }) => {
        console.log('aqui', data)
        this.setState({
          city: data.results.city_name,
          forecast: data.results.forecast,
          results: data.results
        })
      });
  }
  render() {
    return (
      <div className='container z-depth-4'>
        <h1><b>&nbsp;{this.state.city}</b></h1>
        <table className="striped centered">
          <thead>
            <tr>
              <th>Data</th>
              <th>Min.</th>
              <th>Max.</th>
              <th>Velocidade do vento</th>
              <th>Condição</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>{
            this.state.forecast.map((day, index) => {
              return (
                <tr key={index}>
                  <td>{day.date}</td>
                  <td>{day.min}º</td>
                  <td>{day.max}º</td>
                  <td>{this.state.results.wind_speedy}</td>
                  <td>{day.description}</td>
                  <td><img width="70px" src={`/weather-icons/${day.condition}.svg`} alt='day.description'/></td>
                </tr>
              )
            })
          }

          </tbody>
        </table>
      </div>
    );
  }
}

// rnderizando lista de array
/* export default class App extends React.Component {
  render() {
    const jedi = [
      "Obi Wan Kenobi",
      "Luke Skywalker",
      "YODA",
      "Mace Windu"
    ]

    return (
      <div>
        <h1>Jedis</h1>
        <ul>{
          jedi.map((jedi, index) => { //O index esta funcionando como um id
            return <li key={index}>{jedi}</li>
          })
        }</ul>
      </div>
    );
  }
} */

