import React from 'react';
import logo from './logo.svg';
import './App.scss';
import UpperBar from './components/UpperBar';
import BottomBar from "./components/BottomBar";

function App() {
  return (
    <div className="App">
      <UpperBar></UpperBar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
        <BottomBar></BottomBar>
    </div>
  );
}

export default App;
