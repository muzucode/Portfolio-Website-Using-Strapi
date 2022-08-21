import React from 'react'
import { classchain, skewer } from '../../../utility/TagsParser'

export interface ICTLayout {
  title: string,
  contentType: string
  regions: JSX.Element,
  // this tag is useful for using a shared layout on a basic page
  // vs a blog post page.  Some pages may not want <article> tags.
  insideArticleTag?: boolean
  style?: React.CSSProperties
}

export default function CTLayout(props: ICTLayout) {
  // Decide if an <article> tag should be included or not
  const renderRegions = () => {
    if(props.insideArticleTag) {
      return (
        <article>
          <div className='regions-wrap'>
            {props.regions}
          </div>
        </article>
      )
    } else {
      return (
        <div className='regions-wrap'>
          {props.regions}
        </div>
      )
    }
  }
  return (
    <main 
    style={props.style} 
    className={classchain(['ctlayout', props.contentType, props.title])
    }>
      {renderRegions()}
    </main>
  )
}
