import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [allvalues,setAllvalues]=useState([]);

  const update=()=>{

    setAllvalues([...allvalues,{
      id:allvalues.length,
      value:Math.random()
    }])
  }

  return (
    <>
   <ol>
    {allvalues.map(data=>(<li key={data.id}>{data.value}</li>))}
   </ol>
    <button onClick={update}>update</button>
    </>
  )
}


// function App() {
//   const [allvalues,setAllvalues]=useState({firstname:"isha" ,password:"isha123"});

//   const update=()=>{

//     setAllvalues({...allvalues,firstname:"dharm"})
//   }

//   return (
//     <>
//     <h4>your name is {allvalues.firstname} and password is {allvalues.password}</h4>
//     <button onClick={update}>update</button>
//     </>
//   )
// }

export default App
