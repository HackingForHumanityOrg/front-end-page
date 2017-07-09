import React, { Component } from 'react';
import './App.css';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <main>
        <header>
          <h2>Wellness For All</h2>
          <p className="intro">Find a women's health service near you!</p>
        </header>
        <Form />
      </main>
    );
  }
}

export default App;
