import React from 'react'
import styled from 'styled-components'
import Link, { ILink } from '../Link/Link'
import BlockContainer, { IBlockContainer } from './components/BlockContainer'
import BlockDescription, { IBlockDescription } from './components/BlockDescription'
import BlockTitle, { IBlockTitle } from './components/BlockTitle'


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

    <Container backgroundColor={props.BackgroundColor} fontColor={props.FontColor}>
      <h2>{props.Title}</h2>
      <p>{props.Description}</p>
      <Link {...props.Link}></Link>
    </Container>

    // <BlockContainer {...props.BlockContainer}>
    //   <BlockTitle {...props.BlockTitle}></BlockTitle>
    //   <BlockDescription {...props.BlockDescription}></BlockDescription>
      
    // </BlockContainer>
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
  border: 1px solid red;
  background-color: ${props => {
    return props.backgroundColor
  }};
  color: ${props => {
    return props.fontColor
  }};
  /* border: 1px solid red; */
`
