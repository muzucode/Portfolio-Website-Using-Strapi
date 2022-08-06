import React from 'react'
import styled from 'styled-components'
import { Block, IBlock } from '../../../shared/Block/Block'
import { C } from '../../../shared/StyledComponents/StyledComponents'


export interface IBlocks {
  id: number,
  Block: IBlock[]
}

export default function Blocks(props: IBlocks) {
  console.log('Printing blocks...')
  return (
    <Container className='blocks'>
      {
        props.Block.map(block => (
          <Block {...block} key={block.id}></Block>
        ))
      }
    </Container>
  )
}

const Container = styled(C)`

`