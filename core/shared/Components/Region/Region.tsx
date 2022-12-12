import React from 'react'
import { classchain } from '../../../utility/TagsParser'

export interface IRegion {
  title: string,
  children?: JSX.Element
}
export default function Region(props: IRegion) {
  return (
    <div className={classchain(['region', props.title])}>
      <div className="inner-region-wrapper">
        {props.children}
      </div>
    </div>
  )
}
