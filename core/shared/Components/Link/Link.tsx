import React from 'react'
import styled from 'styled-components'

export interface ILink {
  id: number,
  Title: string,
  URL: string
} 
export default function Link(props: ILink) {
  return (
    <a href={props.URL} key={props.id}>{props.Title}</a>
  )
}


const Container = styled.div<ILink>`
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