import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [planetName, setName] = useState([]);

  const planets = ["Mercury", "Venus"]

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.api-ninjas.com/v1/planets?name=',
    headers: { 
      'X-Api-Key': 'TguXuASpapD/bZod0M0EGA==SEhTuO2TbuzVM8WG'
    }
  };

async function foo() {
    for (let i = 0 ; i < planets.length ; i++){
      config.url = 'https://api.api-ninjas.com/v1/planets?name=';
      try {
        config.url = config.url + planets[i];
        //console.log(config.url);
        let a = await axios.request(config);
        setName([...planetName, a.data[0].name]);
        console.log(a.data[0].name);
      } catch (e) {
        console.error(e)
      } 
    }
}


/* async function getPlanetDetails(){
  const result = await axios.request(config);
  console.log(result.data[0].name + "   " + result.data[0].mass);
}*/

  useEffect(() => {
    async function fetchData() {

 /*   Promise.allSettled(
      planets.map(async (planets) => {
        const result = await axios.request<IMatchStats>({
          url: `https://api.api-ninjas.com/v1/planets?name=${planets}`,
          method: 'get',
          headers: {
            'X-Api-Key': 'abc'
          },
        });
        console.log(result);
        }
      )
    );
    */
   await foo();
   console.log();
    
  }
    fetchData();
  }, []);

  return (
    <>
    <h2>
      Sample React App
    </h2>

    <div id="div1">
      {planetName.map((x, index) => {
          return (<p key={index}>{x}</p>)
          })}
    </div>

    <div id="div2">
      {planetName}
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
