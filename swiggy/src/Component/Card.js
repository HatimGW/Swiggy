import React from 'react'
import Card from 'react-bootstrap/Card';
import {Row} from "react-bootstrap";
import Img from "./icons8-veg-48.png"
import "../CSS/card.css"


const CardC = ({item,add}) => {
  const {Title,Price,Descrpition,img} = item
  return (
    <Row className='row mt-4'>
    <Card style={{overflow:"hidden",height:"200px",padding:'10px'}} className="d-flex flex-row-reverse align-items-center">
      <Card.Img style={{borderRadius:"20px",maxHeight:"115px"}} variant="right" src={img} />
      <button onClick={()=>add(item)} id='btn'  style={{maxWidth:"9rem",border:"1px solid green",borderRadius:"10px",position:"absolute",top:"160px",right:"45px"}}>Add to Cart</button>
      <Card.Body style={{maxHeight:"220px"}}>
      <Card.Img style={{maxWidth:"1rem"}} variant='top' src={Img}/>
      <Card.Title>{Title}</Card.Title>
        <Card.Text>&#x20b9;{Price}</Card.Text>
        <Card.Text>{Descrpition}</Card.Text>
      </Card.Body>
    </Card>
   </Row>
)
     }
   
  

export default CardC