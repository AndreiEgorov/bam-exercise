import React, { Component } from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Footer from './components/Footer/';
import { ParallaxProvider } from 'react-scroll-parallax';
class App extends Component {
  render() {
    return (
      <div className="App">
        <ParallaxProvider>
          <Header />
          <MainSection />
          <Footer />
        </ParallaxProvider>
      </div>
    );
  }
}

export default App;
