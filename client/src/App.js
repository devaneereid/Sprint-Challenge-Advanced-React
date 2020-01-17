import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import {ToggleDark} from '../src/components/ToggleDark';

class App extends Component {
  constructor(){
    super();
    this.state = {
      players: []
    };
  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        this.setState({
          players: res.data
        });
        console.log(res)
      })
      .catch(err => {
        console.log('Error Found', err)
      }, [])
  }
  
  render() {
    return (
      <div className="App">
        <h1 data-testid="soccer-header" className="header">Soccer</h1>
        <ToggleDark />
          <div>
            {this.state.players.map(value => (
              <div key={value.id}>
                <h4>Name: {value.name}</h4>
                <p>Country: {value.country}</p>
              </div>
            ))}
          </div>
      </div>
    );
  }
};
export default App;
