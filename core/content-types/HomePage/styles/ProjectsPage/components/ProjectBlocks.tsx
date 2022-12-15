import React from 'react'
import styled from 'styled-components'
import { C } from '../../../../../shared/StyledComponents/StyledComponents'
import { IProjectBlock } from '../interfaces/IProjectBlock'
import ProjectBlock from './ProjectBlock'

interface IProjectBlocks {
  content: IProjectBlock[]
}
export default function ProjectBlocks(props: IProjectBlocks) {
  // console.log(props);
  return (
    <Container className='projects'>
      {
        props.content.map(block => (
          <ProjectBlock {...block} key={block.id}></ProjectBlock>
        ))
      }
    </Container>
  )
}

const Container = styled.div`
  /* border: 1px solid yellow; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`