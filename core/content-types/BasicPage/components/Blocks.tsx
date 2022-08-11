import React from 'react'
import styled from 'styled-components'
import { Block, IBlock } from '../../../shared/Components/Block/Block'
import { C } from '../../../shared/StyledComponents/StyledComponents'


export interface IBlocks {
  id: number,
  Block: IBlock[]
}

export default function Blocks(props: IBlocks) {
  const isBlocksEmpty: boolean = props.id === undefined;

  // If there are blocks, then map them, otherwise, just return a blank fragment
  const blocks = !isBlocksEmpty ? props.Block.map(block => (
    <Block {...block} key={block.id}></Block>
  )) : <></>
  return (
    <Container className='blocks'>
      {blocks}
    </Container>
  )
}

const Container = styled(C)`

`