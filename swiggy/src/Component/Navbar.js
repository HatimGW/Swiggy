import React from 'react'
import Container from 'react-bootstrap/Container';
import img from "./swiggy_BIG.png";
import Navbar from 'react-bootstrap/Navbar';
import "../CSS/card.css";


const NavbarC = () => {
  return (
    <Navbar style={{boxShadow:"0px 0px 4px orange",backgroundColor:"white"}}>
    <Container>
      <Navbar.Brand style={{color:'azure',fontFamily:"cursive",fontWeight:"bold"}} href="#home"><img alt='Logo' style={{maxWidth:"7rem"}} src={img}></img></Navbar.Brand>
      <span>
      <i id='text' style={{color:"orange",cursor:"Pointer",fontSize:"25px"}} class="fa-solid fa-cart-shopping"></i>
      </span>
    </Container>
  </Navbar>
  )
}

export default NavbarC