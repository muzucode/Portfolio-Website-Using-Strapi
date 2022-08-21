import React from 'react'

interface IAuthor {
  content: string
}
export default function Author(props: IAuthor) {
  return (
    <div className='author'>Author: {props.content}</div>
  )
}
