import React from 'react'
import Card from 'react-bootstrap/Card';
import Menu from './MenuAPI';
import {Row,Container} from "react-bootstrap";
import Img from "./icons8-veg-48.png"
import "../CSS/card.css"


const CardC = () => {
  return (

    <Container style={{position:"relative",top:"10px"}}>
     {Menu.map((e)=>{
    return (
    <Row className='row mt-4'>
    <Card style={{overflow:"hidden",height:"200px",padding:'10px'}} className="d-flex flex-row-reverse align-items-center">
      <Card.Img style={{borderRadius:"20px",maxHeight:"115px"}} variant="right" src={e.img} />
      <button id='btn'  style={{backgroundColor:"green",width:"9rem",border:"1px solid green",borderRadius:"10px",fontWeight:"bold",color:"white",position:"absolute",top:"160px",right:"24px"}}>Add to Cart</button>
      <Card.Body style={{maxHeight:"220px"}}>
      <Card.Img style={{maxWidth:"1rem"}} variant='top' src={Img}/>
      <Card.Title>{e.Title}</Card.Title>
        <Card.Text>&#x20b9;{e.Price}</Card.Text>
        <Card.Text>{e.Descrpition}</Card.Text>
      </Card.Body>
    </Card>
 
   </Row>
)
     })}
     </Container>
  )
}

export default CardC