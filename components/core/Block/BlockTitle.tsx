import React from 'react'
import styled from 'styled-components'

export interface IBlockTitle {
  style: {
    color: string,
    fontSize: string
  }
  data: {
    title?: string,
  }
}
export default function BlockTitle(props: IBlockTitle) {
  return (
    <Container {...props}>
      <h2>{props.data.title}</h2>
    </Container>
  )
}

const Container = styled.div`
  
`