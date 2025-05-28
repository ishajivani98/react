import React, { useState } from 'react'

const Child = (props) => {


  const [name ,setName]=useState(" s");  
  const handlersubmit=(e)=>{
   
    e.preventDefault();
    props.getdata(name);

  }
  return (
    <>
        <form onSubmit={handlersubmit}>

            <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} />
            <button>submit</button>

        </form>
    </>
  )
}

export default Child