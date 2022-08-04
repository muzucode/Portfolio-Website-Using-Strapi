import React from 'react'
import { cn } from '../../utility/TagsParser'

export interface ILayout {
  title: string,
  regions: JSX.Element
}

export default function Layout(props: ILayout) {
  return (
    <div className={cn('layout-' + props.title)}>
      {props.regions}
    </div>
  )
}
