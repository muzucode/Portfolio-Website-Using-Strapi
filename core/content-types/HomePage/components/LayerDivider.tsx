import React from 'react'
import styled from 'styled-components'

interface ILayerDivider {
  color: string
}
export default function LayerDivider(props: ILayerDivider) {
  return (
    <Container className="stripes" bgColor={props.color}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Container>
  )
}

interface IContainer {
  bgColor: string
}
const Container = styled.div<IContainer>`
  position: absolute;
  width: 100%;
  height: 50px;
  background: transparent;
  div {
    width: 100%;
    background-color: ${props => props.bgColor};
    /* box-shadow: 0 0 10px 1px ${props => props.bgColor}; */

    &:nth-child(1) {
      margin-bottom: 7px;
      height: 10px;
    }  
    &:nth-child(2) {
      margin-bottom: 10px;
      height: 5px;
    }
    &:nth-child(3) {
      height: 3px;
      margin-bottom: 12px;
    }    
    &:nth-child(4) {
      height: 1px;
    }
  
  }

`
