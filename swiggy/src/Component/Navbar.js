import React from 'react'
import Container from 'react-bootstrap/Container';
import img from "./swiggy_BIG.png";
import Navbar from 'react-bootstrap/Navbar';
import "../CSS/card.css";
import { Badge } from 'react-bootstrap';


const NavbarC = ({size,setshow}) => {

 
  return (
    <Navbar fixed='top' style={{boxShadow:"0px 0px 4px orange",backgroundColor:"white"}}>
     <Container>
      <Navbar.Brand style={{color:'azure',fontFamily:"cursive",fontWeight:"bold"}} href="#home"><img alt='Logo' style={{maxWidth:"7rem"}} src={img}></img></Navbar.Brand>
      <span style={{position:"relative"}}>
      <i onClick={()=>setshow(false)} id='text' style={{color:"orange",cursor:"Pointer",fontSize:"31px"}} className="fa-solid fa-cart-shopping"></i><Badge className='bg bg-transparent' style={{backgroundColor:"white",position:'absolute',right:"3px",top:"-3px"}}>{size}</Badge>
      </span>
    </Container>
  </Navbar>
  )
}

export default NavbarC