import React from 'react'
import styled from 'styled-components'

interface ITitle {
  content: string
}
export default function Title(props: ITitle) {
  return (
    <>
      <Divider></Divider>
      <h1>{props.content}</h1>
    </>
  )
}

const Divider = styled.div`
  margin: 50px auto;
  width: 300px;
  height: 2px;
  background-color: #000;
`
