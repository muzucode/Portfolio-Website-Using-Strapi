import React from 'react'

export interface IBasicPage {
  children: JSX.Element
}
export default function BasicPage(props: IBasicPage) {
  return (
    <>{props.children}</>
  )
}
