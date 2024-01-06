import { useState } from 'react'
import './app.css'
import {NavLink} from "react-router-dom";

function App() {
  const data = [
    {
        id: 0,
        name: 'john',
        age: 20,
        gender: 'male'
    },
    {
        id: 1,
        name: 'jane',
        age: 15,
        gender: 'female'
    },
    {
        id: 2,
        name: 'julie',
        age: 23,
        gender: 'trans'
    }
]
const id = 33;
  return (
    <>
      <p>hello react</p>
     <div className='line'>
      {data.map((index) => (
        <>
        <div>
        <button id="c">
        <NavLink to={"/gautam/"+index.id}>{index.name}</NavLink>
        </button>
        </div>
        </>
      ))}
    
     
      </div>
    </>
  )
}

export default App
