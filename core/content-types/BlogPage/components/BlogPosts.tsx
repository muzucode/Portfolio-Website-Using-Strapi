import React from 'react'
import styled from 'styled-components'
import { C, CFC } from '../../../shared/StyledComponents/StyledComponents'
import { IBlogPost } from '../interfaces/IBlogPost';
import { IBlogPosts } from '../interfaces/IBlogPosts';
import BlogPost from './BlogPostPreview';

export default function BlogPosts(props: IBlogPosts) {

  const isPostsEmpty: boolean = props.data.length === 0;
  console.log(isPostsEmpty);

  // If there are blocks, then map them, otherwise, just return a blank fragment
  const posts = !isPostsEmpty ? props.data.map((blogPost: IBlogPost) => (
    <BlogPost {...blogPost} key={blogPost.id}></BlogPost>
  )) : <></>

  return (
    <Container className='blog-posts'>
      {posts}
    </Container>
  )
}

const Container = styled(CFC)`
  width: 500px;
  position: absolute;
  left: calc(50% - 250px);
  top: 200px;
  
`