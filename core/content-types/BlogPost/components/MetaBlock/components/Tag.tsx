import React from 'react'
import styled from 'styled-components'
import { ITag } from '../../../interfaces/IBlogPost'

interface ITagComponent {
  content: ITag
}
export default function Tag(props: ITagComponent) {
  return (
    <Container className='tag' {...props}>
      {props.content.attributes.title}
    </Container>
  )
}


const Container = styled.div<ITagComponent>`
  margin: 0 7px;
  padding: 5px 15px 3px;
  background-color: ${props => {
    return props.content.attributes.colorTertiary
  }};  
  color: ${props => {
    return props.content.attributes.colorPrimary
  }};
  border-radius: 20px;
`
