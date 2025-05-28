import React, { useState } from 'react'

const From = () => {

     const data={name:"" ,email:"",password:""}
     const [input ,setInput]= useState(data)
     const [flag ,setFlag]=useState(false)

     const handler=(e)=>{

        setInput({...input,[e.target.name]:e.target.value});
        console.log(input)

     }
     const handlersubmit=(e)=>{
        e.preventDefault();
        if(!input.name||!input.email||!input.password){
            alert("all field is mandatory");
        }
        else{
            setFlag(true)

        }
     }


  return (
   
    <form className='container'>

        <pre >{(flag)? <h1 className='ui-define'>hello {input.name} </h1> : " "}</pre>
        <h1 className='header'>Registration Form</h1>

        <input type='text' name='name' placeholder="Enter your name " value={input.name} onChange={handler}/>
        <input type='text' name='email' placeholder="Enter your email " value={input.email} onChange={handler} />
        <input type='text' name='password' placeholder="Enter your password " value={input.password} onChange={handler} />


        <button onClick={handlersubmit}>submit</button>
    </form>
  )
}

export default From