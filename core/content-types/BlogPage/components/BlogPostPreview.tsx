import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';
import { skewer } from '../../../utility/TagsParser';
import { IBlogPost } from '../interfaces/IBlogPost';
import Title from './Title';

export default function BlogPostPreview(props: IBlogPost) {
  return (
    <Link href={`/blog/post/${props.id}`}>
      <div className={`blog-post-preview blog-post-preview__${skewer(props.attributes.title)}`}>
        <Title content={props.attributes.title}></Title>
        <div className='underline'></div>
      </div>
    </Link>


  )
}