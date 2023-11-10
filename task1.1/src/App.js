import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import React, { Component } from 'react';

class App extends Component{
  render(){
    return(
      <div className='App'>
        <Dashboard />

      </div>
    )
  }
}
export default App;
