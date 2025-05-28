import logo from './logo.svg';
import './App.css';
import { useContext, useEffect, useState } from 'react';

function App() {
  
  const [applec,setApplec]=useState(0);
  const [bananac,setBananac]=useState(0);
  const [kiwic,setKiwic]=useState(0);
  const [total,setTotal]=useState(0);
  const [tapple,setTapple]=useState(0);
  const [tbanana,setTbanana]=useState(0);
  const [tkiwi,setTkiwi]=useState(0);
const [totalf,setTotalf]=useState(0);


 const apple=()=>{
     setApplec(applec+1)

 }
 const banana=()=>{
    setBananac(bananac+1)
 }
 const kiwi =()=>{
    setKiwic(kiwic+1)
 }
 
useEffect(()=>{
    setTotal(applec+bananac+kiwic)
},[applec,bananac,kiwic])

useEffect(()=>{
    setTapple(applec*5)
},[applec])

useEffect(()=>{
    setTbanana(bananac*10)
},[bananac])

useEffect(()=>{
    setTkiwi(kiwic*15)
},[kiwic])

useEffect(()=>{
  setTotalf(tapple+tbanana+tkiwi)
},[tapple,tbanana,tkiwi])
  return (
    <>
      <h1>Fruit Counter</h1>
      <table>
        <thead>
          <tr>
            <th style={{padding:"20px"}}> Fruit name </th>
            <th style={{padding:"20px"}}> quntity </th>
            <th style={{padding:"20px"}}> price  </th>
            <th style={{padding:"20px"}}>total price</th>
          </tr>
        </thead>
        
        <tbody>
          <tr>
            <td style={{padding:"20px"}}><button onClick={apple}>apple</button></td>
            <td style={{padding:"20px"}}>{applec}</td>
            <td style={{padding:"20px"}}>5</td>
            <td style={{padding:"20px"}}>{tapple}</td>
          </tr>
          <tr>
            <td style={{padding:"20px"}}><button onClick={banana}>banana</button></td>
            <td style={{padding:"20px"}}>{bananac}</td>
            <td style={{padding:"20px"}}>10</td>
            <td style={{padding:"20px"}}>{tbanana}</td>
          </tr>
          <tr>
            <td style={{padding:"20px"}} > <button onClick={kiwi}>kiwi</button></td>
            <td style={{padding:"20px"}}>{kiwic}</td>
            <td style={{padding:"20px"}}>15</td>
            <td style={{padding:"20px"}}>{tkiwi}</td>
          </tr>
         
          
           </tbody>
        
      </table>
      <h4> total Fruit</h4>
      <span style={{padding:"20px"}} >{total}</span>

      <h4> total Fruit price</h4>
      <span style={{padding:"20px"}} >{totalf}</span>
      {/* <button onClick={apple}>apple</button>
      {applec}<br/>
      <button onClick={banana}>banana</button>
      {bananac}<br/>
      <button onClick={kiwi}>kiwi</button>
      {kiwic}<br/>
     <h1>total</h1>
      {total}
      <br/> */}
    </>
  );
}

export default App;
