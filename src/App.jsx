import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  
  const [name, setName] = useState(["tom", "Bish"]);
  const [age, setAge] = useState([10, 20]);
  const [avAge, setAvgAge] = useState([1]);

  function addNameAge(){
    setName([...name, "Jerry"]);
    setAge([...age, 50]);
  }

  function averageAge(){
    setAvgAge([age.reduce((finalAge, age) => age + finalAge) / age.length])
  }

  return (
    <>
    <h2>
      Sample React App
    </h2>


    <div id="div1">
      {name.map((x, index) => {
          return (<p key={index}>{x}</p>)
          })}
    </div>

    <div id="div2">
      {age.map((x, index) => {
      return (<p key={index}>{x}</p>)
      })}
    </div>

    <div id="div3">
    {avAge.map((x, index) => {
      return (<p key={index}>{x}</p>)
      })}
    </div>


   <div id="button">
    <button onClick={addNameAge}>
      Add Name and Age
    </button>

    <button onClick={averageAge}>
      Calc average age
    </button>
  </div>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
