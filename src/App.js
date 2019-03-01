import React, { Component } from 'react';

var dataset = require('./dataset.json');

class App extends Component {
  render() {
    return (
      <div className="app">
        <pre>
          {dataset.map((dataEntry) => {
            const airportCode = dataEntry.airport.code
            return (
              <p key={airportCode}>
                {airportCode}
              </p>
            );
          })}
        </pre>       
      </div>
    );
  }
}

export default App;
