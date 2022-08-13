import React from 'react'
import styled from 'styled-components'
import { C } from '../../../shared/StyledComponents/StyledComponents'

export interface ITitle {
  content: string
}
export default function Title(props: ITitle) {


  function createMarkup() {
    return {__html: props.content};
  }

  return (
    <Container className='title'>
      <h3 dangerouslySetInnerHTML={createMarkup()}></h3>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
`
