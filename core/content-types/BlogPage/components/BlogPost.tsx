import React from 'react'
import styled from 'styled-components';
import { skewer } from '../../../utility/TagsParser';
import { IBlogPost } from '../interfaces/IBlogPost';
import Title from './Title';

export default function BlogPost(props: IBlogPost) {
  return (
    <Container className={`blog-post blog-post__${skewer(props.attributes.title)}`}>
      <Title content={props.attributes.title}></Title>
    </Container>

  )
}

const Container = styled.div`
  height: fit-content;
  width: 100%;
  /* border: 1px solid red; */
  padding: 15px;
  margin: 20px 0;
  border-radius: 20px;
  background-color: #000000;
  color: #fff;
  box-shadow: 0 0 20px rgba(46, 46, 46, 0.799);
  display: flex;
  text-align: center;
`