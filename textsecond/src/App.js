// ------------------------------------useContext hook=-------------------------------------------------


import './App.css';
import { useState } from 'react';
import ChildA from './ChildA'
import { useMemo } from 'react';

function App() {
  const [add,setAdd]=useState(0);
  const [minus ,setMinus]=useState(100);


  const multiplication=useMemo( function mul(){
    console.log("hello");
    return add*10;
  },[add]);
  return (
  <>
  {multiplication}
   <button onClick={()=>setAdd(add+1)}> add</button>
   {add}<br/>
   <button onClick={()=>setMinus(minus-1)}> minus</button>
   {minus}
   
 
  </>
  );
}

export default App;



// // ------------------------------------useContext hook=-------------------------------------------------

// import logo from './logo.svg'; 
// import './App.css';
// import { createContext } from 'react';
// import ChildA from './ChildA'

// const data = createContext();
// function App() {
//   const name = "Isha"
//   return (
//   <>
//    <data.Provider value={name}>
//     <ChildA/>
//    </data.Provider>
   
//   </>
//   );
// }

// export default App;
//  export {data}



 // -----------------------------------context  api-------------------------------------------


// import logo from './logo.svg';
// import './App.css';
// import { createContext } from 'react';
// import ChildA from './ChildA';

// const data = createContext();
// function App() {
//   const name = "Isha"
//   return (
//     <>

//       <data.Provider value={name}>
//         <ChildA />
//       </data.Provider>

//     </>
//   );
// }

// export default App;
// export { data };  