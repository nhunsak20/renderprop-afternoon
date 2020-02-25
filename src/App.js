import React, { Component } from 'react';
import CurrenyConverter from './Components/CurrencyConverter'
import CurrencyDisplay from './Components/CurrencyDisplay'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Render Currency</h2>
        <CurrenyConverter render={(currencyData, amount) => (
          <CurrencyDisplay amount={amount} currencyData={currencyData} />
        )} />
      </div>
    );
  }
}

export default App;
