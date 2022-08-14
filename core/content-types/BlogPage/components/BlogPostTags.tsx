import React from 'react'
import { IBlogPostTags } from '../interfaces/IBlogPostTags'
import BlogPostTag from './BlogPostTag'

export default function BlogPostTags(props: IBlogPostTags) {
  return (
    <div className='blog-post-tags'>
      {
        props.data.map(tag => (
          <BlogPostTag {...tag} key={tag.id}></BlogPostTag>
        ))
      }
    </div>
  )
}
