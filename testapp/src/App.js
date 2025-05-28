import React from "react";
// import Header from './components/Header';
 import { useState } from "react";
 import ChildA from './ChildA';
import { createContext } from "react";

const data =createContext();
function App() {
  // const name = "Abd";
  // let num2 = 20;
  // num2 = 50;



  // const [num,setNum]=useState(0);
  // var updateCounter = ()=>{

  //   setNum(num+1)
  // }
  // var deCounter = ()=>{

  //   if(num>0){
  //     setNum(num-2)
  //   }
  // }

 const name ="Isha"


  return (
    <>
      {/* <Header myName={name} mynum2={num2}/> */}
      
{/* 
       <div>this is num: {num}</div>
        <button onClick={updateCounter}>click me</button>
        <button onClick={deCounter}>click me for decrement</button>    */}


      <ChildA></ChildA>


     <data.Provider value={name}></data.Provider>

    </>
  );
}

export default App;
export {data};
