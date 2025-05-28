import { useState } from 'react'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)
    // const IPL =["SRH","GT"]
    const IPL=[{id:"1", name:"isha"},{id:"2",name:"dharm"}]
    const result = IPL.map((ipl,id)=><h1 key={ipl.id}>{ipl.name}and id is {ipl.id}</h1>);
    // const result=IPL.map((ipl)=><h1>{ipl}</h1>);
    // const result=IPL.map((ipl,index)=><h1 key={index}>{ipl} and index is {index}</h1>);

  return (
    <>
      <h1>{result}</h1>
    </>
  )
}

// function App() {
//   // const [count, setCount] = useState(0)
//     const IPL =["SRH","GT"]
//     const result=IPL.map((ipl)=><h1>{ipl}</h1>);
//   return (
//     <>
//       <h1>{result}</h1>
//     </>
//   )
// }
export default App
