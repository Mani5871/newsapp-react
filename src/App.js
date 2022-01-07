import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// a5df608aa4bc4acd84b2bc6683b75d74

export default class App extends Component {
  name = "Mani Deepak";
  pageSize = 5;
  render() {
    return (
      <div>
        
        <Router>
        <Navbar></Navbar>
          <Routes>
            <Route exact path="/sports" element = {<News key = "/sports" pageSize = {30} category = "sports" country = "in"></News>} />
            <Route exact path="/science" element = {<News key = "/science" pageSize = {30} category = "science" country = "in"></News>} />
            <Route exact path="/business" element = {<News key = "/business" pageSize = {30} category = "business" country = "in"></News>} />
            <Route exact path="/technology" element = {<News key = "/technology" pageSize = {30} category = "technology" country = "in"></News>} />
            <Route path="/" element = {<News></News>} />
          </Routes>
        </Router>

      </div>
    )
  }
}
