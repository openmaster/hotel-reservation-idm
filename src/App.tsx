import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App () {
  const [val, setVal] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {val && <p>rocky</p>}
        <button onClick={() => { setVal(true) }}>me</button>
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
  )
}

export default App
