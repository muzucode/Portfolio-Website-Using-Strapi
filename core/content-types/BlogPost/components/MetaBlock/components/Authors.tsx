import Image from 'next/image'
import React from 'react'
import { IAuthors } from '../../../interfaces/IBlogPost'

interface AuthorsData {
  content: IAuthors
}
export default function Authors(props: AuthorsData) {

  return (
    <div className='authors'>
      {
        props.content.data.map(author => {
          return (
            <div className='author'>
              <img className='author__avatar' src={`${process.env.NEXT_PUBLIC_API_URI}` + author.attributes.avatar.data.attributes.url}/>
              <h4 className='author__name'>{author.attributes.username}</h4>
            </div>
          )
        })
      }
    </div>
  )
}
