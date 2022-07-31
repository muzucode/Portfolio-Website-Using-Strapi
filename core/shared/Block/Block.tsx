import React from 'react'
import styled from 'styled-components'
import BlockContainer, { IBlockContainer } from './components/BlockContainer'
import BlockDescription, { IBlockDescription } from './components/BlockDescription'
import BlockTitle, { IBlockTitle } from './components/BlockTitle'
import LinkButton, { ILinkButton } from '../LinkButton/LinkButton'


export interface IBlock {
  BackgroundColor: string
  ButtonLink: string
  ButtonTitle: string
  Description: string
  FontColor: string
  Title: string
  id: number
}

export function Block(props: IBlock) {

  return (

    <>
      {props.Title}
    </>

    // <BlockContainer {...props.BlockContainer}>
    //   <BlockTitle {...props.BlockTitle}></BlockTitle>
    //   <BlockDescription {...props.BlockDescription}></BlockDescription>
    //   <LinkButton {...props.LinkButton}></LinkButton>
    // </BlockContainer>
  )
}