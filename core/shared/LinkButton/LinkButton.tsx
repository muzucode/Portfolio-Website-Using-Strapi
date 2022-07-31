import React from 'react'
import styled from 'styled-components'

export interface ILinkButton {
  uuid?: string,
  style: {
    backgroundColor: string,
    fontColor: string,
    border: string
  }
  data: {
    title: string,
    subtitle?: string,
    link?: string,
  }
} 
export default function LinkButton(props: ILinkButton) {
  return (
    <Container {...props}>
      {props.data.title}
    </Container>
  )
}


const Container = styled.div<ILinkButton>`
  width: 300px;
  height: 60px;
  border-radius: 10px;
  border: 1px solid #212121;
  color: #212121;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`