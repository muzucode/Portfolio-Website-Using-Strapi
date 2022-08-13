import React from 'react'
import styled from 'styled-components'

interface ITitle {
  content: string
}
export default function Title(props: ITitle) {
  return (
    <>
      <h1>{props.content}</h1>
    </>
  )
}
