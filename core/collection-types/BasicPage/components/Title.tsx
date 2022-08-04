import React from 'react'

export interface ITitle {
  content: string
}
export default function Title(props: ITitle) {
  return (
    <h2>{props.content}</h2>
  )
}
