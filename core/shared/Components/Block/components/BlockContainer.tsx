import React, { Children } from 'react'
import styled from 'styled-components'

export interface IBlockContainer {
  uuid?: string,
  style: {
    backgroundColor: string,
    fontColor: string,
    border?: string
  }
  data: {
    body?: string
  }
  children? : JSX.Element[]
} 
export default function BlockContainer(props: IBlockContainer) {
  return (
    <Container {...props}>
      {props.children}
    </Container>
  )
}


const Container = styled.div<IBlockContainer>`
height: fit-content;
width: 100%;
/* border: 1px solid red; */
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
