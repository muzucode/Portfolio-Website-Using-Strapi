import React, { useState } from 'react'
import styled from 'styled-components'
import { IBubbleInfo } from '../interfaces/IBubbleInfo'

export default function BubbleInfo(props: IBubbleInfo) {
  
  return (
    <Container className={props.isVisible ? 'visible' : 'hidden'}>
      <EscapeButton onClick={() => props.toggleVisibility(false)}/>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 0%;
  background-color: #000;
  z-index: 5;
  transition: height 1.2s ease-in-out;
  &.visible {
    height: 100%;
    transition: height 1.2s ease-in-out;
  }
`

const EscapeButton = styled.div`
  width: 200px;
  height: 30px;
  background-color: #fff;
  color: white;
  position: absolute;
  bottom: 0;
  left: calc(50% - 100px);
  border-radius: 40px 40px 0 0;
  &:hover {
    cursor: pointer;
  }
`