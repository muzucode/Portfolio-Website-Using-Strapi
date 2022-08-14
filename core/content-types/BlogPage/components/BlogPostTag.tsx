import React from 'react'
import { skewer } from '../../../utility/TagsParser'
import { IBlogPostTag } from '../interfaces/IBlogPostTags'

export default function BlogPostTag(props: IBlogPostTag) {
  return (
    <div className={`blog-post-tag blog-post-tag-${skewer(props.attributes.title)}`}>{props.attributes.title}</div>
  )
}
