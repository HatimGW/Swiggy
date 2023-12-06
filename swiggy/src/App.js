import React, { useState } from 'react'
import NavbarC from './Component/Navbar'
import Main from './Component/Main'
import Cart from './Component/Cart'


const App = () => {

  const[cart,setcart]=useState([])
  

  const add =(item)=>{

  let ispresent=false;

  cart.forEach((product)=>{

    if(item.id === product.id){
       ispresent = true;
    }
    if(ispresent){
      return;
    }
  })
  setcart([...cart,item])
   
  }
  
  return (
    <>
    <NavbarC size={cart.length}/>
    <Main add={add}/>
    </>
  )
}

export default App