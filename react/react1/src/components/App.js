import React, { Component } from 'react';
import Top from './home_top.js'
import Team from  './Team.js';


class App extends Component {
  

  render() {
    return (
      <main>
        <Top />
        <Team />
      </main>      
    );
  }
}

export default App;
