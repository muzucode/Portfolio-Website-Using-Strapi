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
      <Content linkGlowColor={props.data.attributes.color_text} className='bubble-info__content'>
        <h1 className='bubble-info__content__title'>{props.data.attributes.name}</h1>
        <div className='bubble-info__content__description' dangerouslySetInnerHTML={mu(props.data.attributes.description)}></div>
      </Content>

      <EscapeButton 
      className='bubble-info__escape-button'
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
  background-color: ${props => props.bgColor};
  * {
    color: ${props => props.textColor}
  }
`

interface IContent {
  linkGlowColor: string
}
const Content = styled.div<IContent>`
  a {
    text-shadow: 0 0 0 ${props => props.linkGlowColor};
    &:hover {
      text-shadow: 0 0 15px ${props => props.linkGlowColor};
    }
  }
`

interface IEscapeButton {
  highlightColor: string
}
const EscapeButton = styled.div<IEscapeButton>`
  &::before, &::after {
    background-color: ${props => props.highlightColor};
    box-shadow: 0 0 0px 0px ${props => props.highlightColor};
    transition: box-shadow .2s ease-in-out, background-color .2s ease-in-out;
  }
  &:hover {
    &::before, &::after {
      box-shadow: 0 0 7px 0px ${props => props.highlightColor};
      background-color: ${props => props.highlightColor};
    }

  }
`