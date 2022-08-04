import React from 'react'

export interface IBody {
  content: string
}
export default function Body(props: IBody) {
  return (
    <>
    {props.content}
    </>
  )
}
