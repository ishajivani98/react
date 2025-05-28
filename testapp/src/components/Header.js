import React from 'react'

const Header = (props) => {
  const num1 = 5;
  let num2 = props.mynum2;
  console.log('num2', num2)
num2 = 35;
  return (
    <>
    <div>I am {props.myName}</div>
  
    <div>This is new calulation: {num1+num2}</div>
    </>
  )
}

export default Header