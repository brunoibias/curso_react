import React from 'react';

// rnderizando lista de array
export default class App extends React.Component {
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
}

