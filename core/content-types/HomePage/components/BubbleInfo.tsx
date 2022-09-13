import React, { useState } from 'react'
import styled from 'styled-components'
import { mu } from '../../../utility/Markup'
import { IBubbleInfo } from '../interfaces/IBubbleInfo'

export default function BubbleInfo(props: IBubbleInfo) {

  return (
    <Container 
    className={`${props.isVisible ? 'visible' : 'hidden'} bubble-info`}
    bgColor={props.data.attributes.color_background}
    textColor={props.data.attributes.color_text}>
      <Content>
        <Title>{props.data.attributes.name}</Title>
        <ShortDescription dangerouslySetInnerHTML={mu(props.data.attributes.description)}></ShortDescription>
      </Content>



      <EscapeButton 
      onClick={() => props.toggleVisibility(false)}
      highlightColor={props.data.attributes.color_highlight}/>
    </Container>
  )
}

interface IContainer {
  bgColor: string,
  textColor: string
}
const Container = styled.div<IContainer>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0%;
  background-color: ${props => {
    return props.bgColor
  }};  
  z-index: 5;
  transition: height 1.2s ease-in-out;
  overflow: hidden;
  &.visible {
    height: 100%;
    transition: height 1.2s ease-in-out;
  }
  h1, h2, p {
    color: ${props => {
      return props.textColor
    }};
  }
`

const Content = styled.div`
  margin: 0 auto;
  padding: 100px 0;
  max-width: 1300px;
  p, h2 {
    margin: 0;
  }
`

const Title = styled.h1`
  font-size: 200px;
  margin: 0;
  position: relative;
  left: -13px;
`

const Subtitle = styled.h2`
  margin: 0;
`
const ShortDescription = styled.div`
  margin: 0;
`
interface IEscapeButton {
  highlightColor: string
}
const EscapeButton = styled.div<IEscapeButton>`
  width: 200px;
  height: 30px;
  color: #fff;
  position: absolute;
  bottom: 0;
  left: calc(50% - 100px);
  border-radius: 40px 40px 0 0;
  box-shadow: 0 0 0px 0px ${props => props.highlightColor};
  background-color: #fff;
  transition: box-shadow 1.2s ease-in-out, background-color 1.2s ease-in-out;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 15px 0px ${props => props.highlightColor};
    background-color: ${props => props.highlightColor};
    transition: box-shadow .2s ease-in-out, background-color .2s ease-in-out;
  }
`