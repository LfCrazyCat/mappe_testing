import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import resources from './ressurser';


function App() {
  return (
    <div>
      <h1>Ressurser</h1>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.title}</a>
          </li> 
          ))}
      </ul>
    </div>
  );
}

export default App;


/*
function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Ressursarkiv</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
           <code>src/App.jsx</code> Ressursarkiv
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
 
*/