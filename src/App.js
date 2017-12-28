import React, { Component } from 'react';

import './styles/App.css';

import FixedHeader from './sections/Header';

import Welcome from './sections/Welcome';

import Steal from "./sections/Steal";

import Works from "./sections/Works";

import Amber from "./sections/Amber";

import Features from "./sections/Features";

import Quote from "./sections/Quote";

import Blog from "./sections/Blog";

import Progress from "./sections/Progress";

import Team from "./sections/Team";

import Footer from "./sections/Footer";

class App extends Component {
  render() {
    return (
        <div className="wrapper">

            <FixedHeader/>

            <Welcome/>

            <Steal/>

            <Works/>

            <Amber/>

            <Features/>

            <Quote/>

            <Blog/>

            <Progress/>

            <Team/>

            <Footer/>

        </div>
    );
  }
}

export default App;






/*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>*/