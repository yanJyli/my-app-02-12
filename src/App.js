import Title from './Title';
import { Component } from 'react';

class App extends Component {

  handleMouseEnter = (event) => {
    alert ('Done!');
  };

  render() {
    return <Title text="Homework 02-12" onMouseEnter={this.handleMouseEnter}/>
  }
}

export default App;