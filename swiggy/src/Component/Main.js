import React from 'react'
import CardC from './Card'
import Menu from './MenuAPI';
import {Container} from "react-bootstrap";

const Main = ({add}) => {
  return (
    <Container style={{position:"relative",top:"10px"}}>
    {Menu.map((item)=>{
        return (
            <CardC add={add} item={item}/>
        )
    })}
    </Container>
  )
 
}

export default Main