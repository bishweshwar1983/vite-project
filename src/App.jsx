import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  // const [count, setCount] = useState(0)

  const [name, setName] = useState([{
    name: "Tom",
    age: 20,
  },
  {
    name: "bell",
    age: 30
  }]);

  const [newName, setNewName] = useState("testName");
  const [newAge, setNewAge] = useState();

  
  // const [age, setAge] = useState([10, 20, 10]);
  const [avAge, setAvgAge] = useState();
// 
  function addNameAge(){
    setName([...name, {name: newName, age: newAge}]);
  }

  function averageAge(){
    const ages = name.map((x) => x.age)
    return ages.reduce((finalAge, ages) => ages + finalAge) / ages.length;
  }

  function handleAddName(e){
    setNewName(e.target.value);
  }

  function handleAddAge(e){
    setNewAge(e.target.value);
  }

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
      console.log(result.data.abilities);
    }
    fetchData();
  }, []);

  return (
    <>
    <h2>
      Sample React App
    </h2>


    <div id="div1">
      {name.map((x, index) => {
          return (<p key={index}>{x.name} {x.age}</p>)
          })}
    </div>

    {/* <div id="div2">
      {age.map((x, index) => {
      return (<p key={index}>{x}</p>)
      })}
    </div> */}

    <div id="div3">
      {averageAge()}
    </div>


  <input type="text" value={newName} onChange={handleAddName} />
  <input type="number" value={newAge} onChange={handleAddAge} />

   <div id="button">
    <button onClick={addNameAge}>
      Add Name and Age
    </button>

    <button onClick={averageAge()}>
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
