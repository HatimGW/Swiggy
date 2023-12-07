import React, { useEffect, useState } from 'react'
import {Card,Button,Container,Row} from "react-bootstrap"
import Img from "./icons8-veg-48.png"

const Cart = ({cart,setshow,handle,setcart}) => {
const[price, setPrice] = useState(0);
const[empty,setEmpty] = useState(false);


const priceUpdate=()=>{
  let ans = 0
  cart.map((item)=>(
    ans += item.amount*item.Price
  ))
  setPrice(ans)
 
}
const Delete=(id)=>{
const update = cart.filter((e)=> e.id !== id)
setcart(update);
}
const update=()=>{
  if(cart.length===0){
    setEmpty(true);
  }
}


useEffect(()=>{
  priceUpdate()
  update()
})

  return (

  <>
  {!empty?(
    <Container>
    <h1 style={{marginTop:"80px"}}>Your Cart</h1>
    {cart?.map((item)=>{
      const{Title,img,Descrpition,Price,amount}=item;
      return(
      <Row className='row mt-4'>
      <Card style={{overflow:"hidden",height:"200px",padding:'10px'}} className="d-flex flex-row-reverse align-items-center">

      <Card.Body style={{display:"contents",padding:"0px",position:"relative", right:"0px"}}>
      <Card.Img style={{borderRadius:"20px",maxHeight:"115px"}} variant="right" src={img} />
      <Container style={{display:"flex",right:"0px",maxWidth:"10rem",position:"absolute",top:"157px"}}>
      <Button onClick={()=>handle(item,-1)} style={{width:"2.2rem",textAlign:"center",border:"none",backgroundColor:"orange"}}>-</Button>
      <Button  style={{cursor:"default"}} variant='none'>{amount}</Button>
      <Button onClick={()=>handle(item,+1)} style={{textAlign:"center",border:"none",backgroundColor:"orange"}}>+</Button>
      </Container>
      </Card.Body>
      
      <Card.Body style={{maxHeight:"220px"}}>
      <Card.Img style={{maxWidth:"1rem"}} variant='top' src={Img}/>
      <Card.Title>{Title}</Card.Title>
        <Card.Text>&#x20b9;{Price}</Card.Text>
        <Card.Text>{Descrpition}</Card.Text>
      </Card.Body>
    </Card>
    <Container style={{display:"flex",justifyContent:"center"}}>
    <Button onClick={()=>Delete(item.id)} style={{marginTop:"0.5rem",maxWidth:"25rem",border:"1px solid black",color:"black",backgroundColor:"transparent"}}><i style={{marginRight:"1rem"}} class="fa-solid fa-trash"></i>Remove</Button>
    </Container>
   </Row>
      )
    })
   }
   <Container style={{display:"flex",marginTop:"2rem",paddingRight:"7rem"}}>
    <h2>Total Price:&nbsp;&nbsp;&nbsp;&#x20b9;{price}/- </h2>
   </Container>
   
   <Container style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}} className='d-flex justify-content-center flex-direction-column mt-4'>
   <Button style={{width:"9rem",borderRadius:"10px",border:"none",backgroundColor:"orange"}}>Checkout {cart.length}</Button>
   <Button onClick={()=>setshow(true)} style={{marginTop:"1rem",width:"9rem",borderRadius:"20px",border:"none",backgroundColor:"orange",position:"relative"}}>Go Back</Button>
  </Container>
    </Container>
    ):
    (<Container style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
      <h1 style={{fontSize:"25px",marginTop:"5rem"}}>Your Cart is Empty!</h1>
    <Button onClick={()=>setshow(true)} style={{marginTop:"8rem",width:"9rem",borderRadius:"20px",border:"none",backgroundColor:"orange",position:"relative"}}>Go Back</Button>
    </Container>)}
  </>
  )

}

export default Cart;