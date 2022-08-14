import React from 'react'
import styled from 'styled-components'
import { C, CFC } from '../../../shared/StyledComponents/StyledComponents'
import { IBlogPost } from '../interfaces/IBlogPost';
import { IBlogPosts } from '../interfaces/IBlogPosts';
import BlogPostPreview from './BlogPostPreview';

export default function BlogPostPreviews(props: IBlogPosts) {

  const isPostsEmpty: boolean = props.data.length === 0;

  // If there are blocks, then map them, otherwise, just return a blank fragment
  const posts = !isPostsEmpty ? props.data.map((blogPost: IBlogPost) => (
    <BlogPostPreview {...blogPost} key={blogPost.id}></BlogPostPreview>
  )) : <></>

  return (
    <Container className='blog-post-previews'>
      {posts}
    </Container>
  )
}

const Container = styled(CFC)`
  width: 500px;
  position: absolute;
  left: calc(50% - 250px);
  top: 200px;
  height: fit-content;
  
`