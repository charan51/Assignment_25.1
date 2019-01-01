import React, { Component } from 'react';
import User from './User';
class App extends Component {
  render() {
    return (
      <div className="App">
        <User name="Charan" age={20} skills={['coding', 'playing games', 'sleeping']}/>
      </div>
    );
  }
}

export default App;
