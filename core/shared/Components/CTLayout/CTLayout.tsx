import React from 'react'
import { skewer } from '../../../utility/TagsParser'

export interface ICTLayout {
  title: string,
  regions: JSX.Element
}

export default function CTLayout(props: ICTLayout) {
  return (
    <div className={`ctlayout ${skewer('ctlayout__' + props.title)}`}>
      {props.regions}
    </div>
  )
}
