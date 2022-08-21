import React from 'react'
import { ITag } from '../interfaces/ITag'

interface ITags {
  content: ITag[]
}
export default function Tags(props: ITags) {
  return (
    <div className='tags'>Tags</div>
  )
}
