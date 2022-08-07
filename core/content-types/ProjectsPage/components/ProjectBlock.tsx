import React from 'react'
import styled from 'styled-components'
import { C } from '../../../shared/StyledComponents/StyledComponents'
import { skewer } from '../../../utility/TagsParser'
import { IProjectBlock } from '../interfaces/IProjectBlock'

export default function ProjectBlock(props: IProjectBlock) {
  return (
    <Container className={`project-block project-block__${skewer(props.title)}`}>
      <div className='content'>
        <h3>{props.project.data.attributes.title}</h3>
        <p>{props.project.data.attributes.body}</p>
      </div>
    </Container>
  )
}

const Container = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 200px;
  margin: 0 0 4%;

  @media (min-width: 426px) {
    width: 48%;
  }

  .content {
    padding: 30px;
    border: 2px solid lightgreen; 
    height: 100%;
    border-radius: 15px;
    background-color: #cfffcf;

    h3 {
      margin: 0;  
    }
    
  }

`