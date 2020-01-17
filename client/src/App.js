import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import {ToggleDark} from '../src/components/ToggleDark';
import styled from 'styled-components';

const H1Styles = styled.h1`
  font-family: monospace;
  font-weight: 300;
  font-size: 2.6rem;
  color: hotpink;
`;
const NameStyles = styled.h4`
  font-family: monospace;
  text-decoration: underline;
  font-size: 1.3rem;
`;
const Country = styled.p`
  font-family: monospace;
`;
const DivStyles = styled.div`
  border: 1px solid lavender;
  padding: 10px;
  margin: 15px 100px;
`;

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
        <H1Styles data-testid="soccer-header" className="header">Soccer</H1Styles>
          <ToggleDark />
            <div>
              {this.state.players.map(value => (
                <DivStyles key={value.id}>
                  <NameStyles>Name: {value.name}</NameStyles>
                  <Country>Country: {value.country}</Country>
                </DivStyles>
              ))}
            </div>
      </div>
    );
  }
};
export default App;
