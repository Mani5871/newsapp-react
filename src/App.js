import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

// a5df608aa4bc4acd84b2bc6683b75d74

export default class App extends Component {
  name = "Mani Deepak";
  pageSize = 5;
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <News pageSize = {5}/>
      </div>
    )
  }
}
