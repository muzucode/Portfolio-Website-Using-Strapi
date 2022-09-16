import React from 'react'
import styled from 'styled-components'
import { IBackToPage } from '../interfaces/IBackToPage'

export default function BackToPage(props: IBackToPage) {
  return (
    <Container>
      <a href={props.location}>&larr; {props.text}</a>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  top: 20px;
  left: 30px;
  a {
    color: black;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`