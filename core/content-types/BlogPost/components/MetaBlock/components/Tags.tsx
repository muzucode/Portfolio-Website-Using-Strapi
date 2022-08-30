import React from 'react'
import { ITags } from '../../../interfaces/IBlogPost'
import Tag from './Tag'

interface ITagsComponent {
  content: ITags
}
export default function Tags(props: ITagsComponent) {
  return (
    <div className='tags'>
      {
        props.content.data.map(tag => {
          return (
            <Tag content={tag}></Tag>
          )
        })
      }
    </div>
  )
}
