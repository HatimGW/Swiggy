import React, { useState } from 'react'
import NavbarC from './Component/Navbar'
import Main from './Component/Main'
import Alert from 'react-bootstrap/Alert';
import Cart from './Component/Cart'


const App = () => {

  const [cart,setcart] = useState([])
  const[show,setshow]= useState(true);
  const[success,setsuccess]=useState(false);
  const[warning,setwarning]=useState(false);

  
  const add =(item)=>{
  let ispresent=false;
  cart.forEach((product)=>{
  
    if(item.id === product.id){
       ispresent = true;
       return;
      }
  })
  if(ispresent){
    setwarning(true)
    setTimeout(()=>{
      setwarning(false);
    },2000)
    return;
  }
  
  else{
    setcart([...cart,item])
    setsuccess(true)
    setTimeout(()=>{
      setsuccess(false);
    },2000)
    return;
  }
  }

  const handle=(data,e)=>{
    let ind =-1;
    cart.forEach((e,index)=>{
     if(data.id === e.id){
      ind = index
     }
  })
  const arr = cart;
  arr[ind].amount += e
  if(arr[ind].amount === 0)
    arr[ind].amount=1;
  
  setcart([...arr])
  }
 
  
  return (
    <>
{success &&
( <>
    {['success'].map((variant) => (
      <Alert style={{right:"0px",position:"fixed",zIndex:"100"}} key={variant} variant={variant}>
        Item added successfully
      </Alert>
    ))}
  </>) }

{warning &&
(<>
    {['danger'].map((variant) => (
      <Alert style={{right:"0px",position:"fixed",zIndex:"100"}} key={variant} variant={variant}>
        Item is already added to cart
      </Alert>
    ))}
  </>)  }  
    <NavbarC setshow={setshow} size={cart.length}/>
    {show?
    <Main add={add}/>:
    <Cart handle={handle} setcart={setcart} setshow={setshow} cart={cart}/>
    }
    </>
  )
}

export default App