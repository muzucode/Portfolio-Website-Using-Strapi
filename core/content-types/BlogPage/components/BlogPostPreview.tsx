import Link from 'next/link';
import React, { useContext } from 'react'
import { skewer } from '../../../utility/TagsParser';
import { BlogPageContext } from '../contexts/BlogPageContext';
import { IBlogPost } from '../interfaces/IBlogPost';
import Title from './Title';

export default function BlogPostPreview(props: IBlogPost) {

  return (
    <BlogPageContext.Consumer>
      {value => {
        return (
          <a href={`/blog/post/${encodeURI(props.attributes.title).replace(/%/g, '%25')}`}>
            <div 
            className={`blog-post-preview blog-post-preview__${skewer(props.attributes.title)}`}
            onMouseOver={() => value?.setHighlightedTagsCtx(props.attributes.tags)} 
            onMouseLeave={() => value?.setHighlightedTagsCtx(null)} 
            >
              <div className='text-container'>
                <Title content={props.attributes.title}></Title>
                <div className='underline'></div>
              </div>
            </div>
          </a>
        )
      }}

    </BlogPageContext.Consumer>
  )

}