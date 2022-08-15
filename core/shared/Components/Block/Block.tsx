import React from 'react'
import styled from 'styled-components'
import Link, { ILink } from '../Link/Link'
import { skewer } from '../../../utility/TagsParser'
import { mu } from '../../../utility/Markup'


export interface IBlock {
  id: number
  Title: string
  Description: string
  BackgroundColor: string
  FontColor: string
  Link: ILink
}

export function Block(props: IBlock) {

  return (

    <Container className={`block block__${skewer(props.Title)}`} backgroundColor={props.BackgroundColor} fontColor={props.FontColor}>
      <h2>{props.Title}</h2>
      <div className='description' dangerouslySetInnerHTML={mu(props.Description)}></div>
      <Link {...props.Link}></Link>
    </Container>
  )
}

interface IContainer {
  backgroundColor: string,
  fontColor: string
}
const Container = styled.div<IContainer>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => {
    return props.backgroundColor
  }};
  color: ${props => {
    return props.fontColor
  }};
`
