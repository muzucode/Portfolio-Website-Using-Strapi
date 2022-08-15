import React from 'react'
import styled from 'styled-components'
import { C, CFC, CFCC } from '../../../shared/StyledComponents/StyledComponents'

export interface ITitle {
  content: string
}
export default function Title(props: ITitle) {
  return (
    <Container className='title'>
      <h1>{props.content}</h1>
    </Container>
  )
}

const Container = styled(C)`

`
