import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    userName : [
      'Niranjan',
      'Vishnu',
      'Priya'
    ]
  }

  nameChangeHandler = (event) => {
    this.setState({
      userName : [
        event.target.value,
        'Vishnu',
        event.target.value
      ]
    })
  }


  render() {
    const style = {
      display: 'grid',
      width: '20%',
      margin: '10px auto',
      border: '5px solid #eee',
      boxShadow: '0 2px 3px #ccc',
      padding: '5px'
    }

    return (
      <div className="App">
        <UserInput style={style} value={this.state.userName[0]} onchanged={this.nameChangeHandler}/>
        <UserOutput username={this.state.userName[0]}/>
        <UserOutput username={this.state.userName[1]}/>
        <UserOutput username={this.state.userName[2]}/>
      </div>
    );
  }
}

export default App;
