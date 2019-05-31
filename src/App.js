import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SketchPicker  } from 'react-color';
import styled from 'styled-components'

const Maincontainer = styled.div`
color:white;
font-size: 0.5rem;
text-align:center;
line-height:3.5rem;
width:50px;
height:50px;
border:2px solid white;
&:hover {
  width:100px;
  height:100px;
  font-size: 1rem;
  cursor:pointer;
}
`
class App extends React.Component {
  state = {
    background: '#fff',
  };
constructor(){
  super()
  this.state = {
    value : ''
  }
}

createTable = (n) => {
  let table = []

  for (let i = 0; i < n; i++) {
    table.push(<div>
      {
       <Maincontainer style={{backgroundColor:this.getRandomColor()}}>
       {this.getRandomColor()}
       </Maincontainer>
      }
      </div>)
  }
  return table
}

 getRandomNumber(low, high) {
  var r = Math.floor(Math.random() * (high - low + 1)) + low;
  return r;
}

 getRandomColor() {
  var characters = "0123456789ABCDEF";
  var color = '#';

  for (var i = 0; i < 6; i++) {
    color += characters[this.getRandomNumber(0, 15)];
  }
  
  return color;
}
  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };
  handleChange = (e) =>{ 
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <div>
      <div style={{display:'flex',flexWrap:'wrap'}}>
      {this.createTable(500)}
      </div>
      <div style={{width:'100vw',height:'10vh',backgroundColor:this.state.background }}>Your selection : {this.state.background}</div>
      <SketchPicker
      color={ this.state.background }
      onChangeComplete={ this.handleChangeComplete }
      />
      <input type="text" value={this.state.value} onChange={this.handleChange}/>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',fontSize:'5px',color:'white',borderRadius:'100px'}}>{this.state.value} {this.state.background}</div>
      </div>

    );
  }
}

export default App;
