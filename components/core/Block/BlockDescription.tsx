import React from 'react'
import styled from 'styled-components'

export interface IBlockDescription {
  style: {
    color: string,
    fontSize: string
  }
  data: {
    description?: string,
  }
}
export default function BlockDescription(props: IBlockDescription) {
  return (
    <Container {...props}>
      {props.data.description}
    </Container>
  )
}

const Container = styled.div`
  
`