import logo from './logo.svg';
import './App.css';
import MyTestElement from './MyTestElement';

import React from 'react';


function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-clock" >
          <Clock />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <div> 
          <Welcome name="Component Property" />
        </div>

        <div className="App-customDiv" >
          {< MyTestElement />}
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

function CurrentTime() {
  return new Date().toLocaleTimeString();
}

//Component: Welcome
function Welcome(props) {
  return <div>Component using {props.name}</div>;
}


class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  //lifecycle start
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  //lifecycle end
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        { this.state.date.toLocaleTimeString() }
      </div>
    );
  }
}


export default App;
