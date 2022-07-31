import React from 'react'
import styled from 'styled-components'
import BlockContainer, { IBlockContainer } from '../core/Block/BlockContainer'
import BlockDescription, { IBlockDescription } from '../core/Block/BlockDescription'
import BlockTitle, { IBlockTitle } from '../core/Block/BlockTitle'
import LinkButton, { ILinkButton } from '../core/LinkButton'

export interface IBlock {
  BlockContainer: IBlockContainer,
  LinkButton: ILinkButton,
  BlockTitle: IBlockTitle,
  BlockDescription: IBlockDescription
}
export function Block(props: IBlock) {

  return (
    <BlockContainer {...props.BlockContainer}>
      <BlockTitle {...props.BlockTitle}></BlockTitle>
      <BlockDescription {...props.BlockDescription}></BlockDescription>
      <LinkButton {...props.LinkButton}></LinkButton>
    </BlockContainer>
  )
}