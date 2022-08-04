import React from 'react'
import { Block, IBlock } from '../../../shared/Block/Block'


export interface IBlocks {
  id: number,
  Block: IBlock[]
}

export default function Blocks(props: IBlocks) {
  console.log('Printing blocks...')
  return (
    <div className='blocks'>
      {
        props.Block.map(block => (
          <Block {...block} key={block.id}></Block>
        ))
      }
    </div>
  )
}
