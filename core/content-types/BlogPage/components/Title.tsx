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
      <h2 dangerouslySetInnerHTML={createMarkup()}></h2>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  h2 {
    margin: 0;
  }
`
