import React from 'react'
import { classchain, skewer } from '../../../utility/TagsParser'

export interface ICTLayout {
  title: string,
  contentType: string
  regions: JSX.Element,
  style?: React.CSSProperties
}

export default function CTLayout(props: ICTLayout) {
  return (
    <div 
    style={props.style} 
    className={classchain(['ctlayout', props.contentType, props.title])
    }>
      <div className='wrap'>
        {props.regions}
      </div>
    </div>
  )
}
