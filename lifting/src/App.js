import logo from './logo.svg';
import './App.css';
import Child from './child';


function App() {

  const getdata=(data)=>{
    console.log(data);
  }
  return (
   <>
   <Child getdata={getdata}/>
   
   </>
  );
}

export default App;
