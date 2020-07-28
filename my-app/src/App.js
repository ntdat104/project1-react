import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Category from './components/Category';
import Feature from './components/Feature';
import Partner from './components/Partner';
import Connect from './components/Connect';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="wrapper">
          <Header />
          <Banner />
          <Category />
          <Feature />
          <Partner />
          <Connect />
          <Subscribe />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
