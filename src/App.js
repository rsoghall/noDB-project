import React, { Component } from 'react';

import './App.css';
import A1cResults from './components/A1cResults';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header style={{borderBottom: '1px solid #C9D4DE'}}>
        
        </header> */}
        <A1cResults/>
        
      </div>
    );
  }
}

export default App;
