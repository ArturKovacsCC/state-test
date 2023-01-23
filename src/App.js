import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [userName, setUserName] = useState("hello");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <input value={userName} onChange={e => setUserName(e.target.value)}></input>
        <p>{userName}</p>
      </header>
    </div>
  );
}

export default App;
