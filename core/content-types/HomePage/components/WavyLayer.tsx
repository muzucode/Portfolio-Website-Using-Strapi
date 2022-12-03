import React from 'react'
import styled from 'styled-components'
import LayerDivider from './LayerDivider'

export default function WavyLayer() {
  return (
    <Container>
      {/* <LayerDivider color='#4e4ea1'/> */}
      <Circle/>
      <Circle/>
      <Circle/>
      <Circle/>
      <Circle/>
      <Circle/>      
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 2000px;
  background-color: #272727;
  display: block;
  position: relative;
  margin: 0 auto;
  /* border: 5px solid red; */
`

const Circle = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-color: #4e4ea1;
  position: absolute;

  &:nth-of-type(2n+1) {
    background-color: #fff;
  }

  &:nth-of-type(1) {
    left: 5%;
    top: 10%;
  }  
  &:nth-of-type(2) {
    left: 10%;
    top: 5%;
  }
  &:nth-of-type(3) {
    left: 30%;
    top: 10%;
  }
  &:nth-of-type(4) {
    left: 35%;
    top: 5%;
  }
  &:nth-of-type(5) {
    left: 55%;
    top: 10%;
  }    
  &:nth-of-type(6) {
    left: 60%;
    top: 5%;
  }         
`