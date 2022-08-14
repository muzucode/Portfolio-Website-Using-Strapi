import React from 'react'
import styled from 'styled-components'
import { ax } from '../../../utility/Axios'
import { IBlogPostTag, IBlogPostTags } from '../interfaces/IBlogPostTags';
import BlogPostTags from './BlogPostTags';
import Tags from './BlogPostTags'

export default function BlogPageTagsBlock(props: IBlogPostTags) {
  return (
    <div className='blog-post-tags-block'>
      <BlogPostTags {...props}/>
    </div>
  )
}
