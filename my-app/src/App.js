import React from 'react';
import logo from './logo.svg';
import './app.css';
import SystemTime from './SystemTime';

function App() {
  return (
      <div className="App">
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <img src={logo} className="App-logo" alt="logo" />
        </p>
        <div>
          <Welcome name="Component Property" />
        </div>
        <div>
          <CurrentTime name="User Name" />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>  

  );
};

//Component: Welcome
function Welcome(props) {
  return <div>Component using {props.name}</div>;
}

function CurrentTime(props) {
  console.info( props.name + "logged in");
  return new Date().toLocaleTimeString();
}

export default App;
