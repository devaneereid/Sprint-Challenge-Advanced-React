import React, {Component} from 'react';
import './App.css';
import axios from 'axios';


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
        <h1>Women's World Cup!</h1>
          <div>
            {this.state.players.map(value => (
              <div key={value.id}>
                <h4>Name: {value.name}</h4>
                <h5>Country: {value.country}</h5>
              </div>
            ))}
          </div>
      </div>
    );
  }
};
export default App;
