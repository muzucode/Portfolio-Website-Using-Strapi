import React from 'react'
import styled from 'styled-components'
import { C, CFCC } from '../../../shared/StyledComponents/StyledComponents'

export interface ITitle {
  content: string
}
export default function Title(props: ITitle) {
  return (
    <Container className='title'>
      <h2>{props.content}</h2>
    </Container>
  )
}

const Container = styled(CFCC)`

`
