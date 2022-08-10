import React from 'react'
import styled from 'styled-components'
import { C, CF } from '../../../shared/StyledComponents/StyledComponents'
import Markdown from 'marked-react';

export interface IBody {
  content: string
}
export default function Body(props: IBody) {
  return (
    <Container className='body'>
      <Markdown>{props.content}</Markdown>
    </Container>
  )
}

const Container = styled.div`

`