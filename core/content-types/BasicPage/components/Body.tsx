import React from 'react'
import styled from 'styled-components'
import { C, CF } from '../../../shared/StyledComponents/StyledComponents'

export interface IBody {
  content: string
}
export default function Body(props: IBody) {
  return (
    <Container className='body'>
      {props.content}
    </Container>
  )
}

const Container = styled(CF)`

`