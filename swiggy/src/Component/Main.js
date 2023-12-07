import React from 'react'
import CardC from './Card'
import Menu from './MenuAPI';
import {Container} from "react-bootstrap";

const Main = ({add}) => {
  return (
    <Container style={{marginTop:"5rem",position:"relative",top:"10px"}}>
    {Menu.map((item)=>{
        return (
            <CardC key={item.id} add={add} item={item}/>
        )
    })}
    </Container>
  )
 
}

export default Main