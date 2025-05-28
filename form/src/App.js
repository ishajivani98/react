import './App.css';
import From from './From';


function App() {


  return (
    <>
        <From/>
    </>
  );
}
export default App;










// -------------------------------------------controlled Component----------------------------------------------





// function App() {

//   const [name,setName]=useState(" ")
//   const [pswd,setPswd]=useState(" ");
//   const handle=(e)=>{
//     if(e.target.name=="firstname"){
//     console.log(e.target.value);
//     setName(e.target.value);
//     }
//     else{
//       setPswd(e.target.value);
//       console.log(e.target.value);
//     }
//   }
//   return (
//     <>
//       <form>
//         <label> name</label>
//         <input type="text" name="firstname" value={name} onChange={handle}  /><br/>
//         <label>password</label>
//          <input type="text"  name="password" value={pswd} onChange={handle}  />
//       </form>
//     </>
//   );
// }





// function App() {

//   const [name,setName]=useState(" ")
//   const handle=(e)=>{
//     console.log(e.target.value);
//     setName(e.target.value);

//   }
//   return (
//     <>
//       <form>
//         <label> name</label>
//         <input type="text" value={name} onChange={handle}  />
//       </form>
//     </>
//   );
// }

