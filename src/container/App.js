import React, { Component } from 'react';
import '../assets/App.css'
import SliderImage from '../components/SliderImage'
import images from '../fixture'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SliderImage imgCollection={images} />
      </div>
    );
  }
}

export default App
