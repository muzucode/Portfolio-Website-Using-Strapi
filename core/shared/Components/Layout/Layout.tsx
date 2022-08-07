import React from 'react'
import { skewer } from '../../../utility/TagsParser'

export interface ILayout {
  title: string,
  regions: JSX.Element
}

export default function Layout(props: ILayout) {
  return (
    <div className={`layout ${skewer('layout__' + props.title)}`}>
      {props.regions}
    </div>
  )
}
