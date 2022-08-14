import React from 'react'
import styled from 'styled-components'
import { skewer } from '../../../utility/TagsParser'
import { IBlogPostTag } from '../interfaces/IBlogPostTags'

interface IColors {
  primary: string,
  secondary: string,
  tertiary: string
}

export default function BlogPostTag(props: IBlogPostTag) {

  const colors: IColors = {
    primary: props.attributes.colorPrimary,
    secondary: props.attributes.colorSecondary,
    tertiary: props.attributes.colorTertiary,
  }
  console.log(colors)
  return (
    <Container 
    className={`blog-post-tag blog-post-tag-${skewer(props.attributes.title)}`}
    colors={colors}
    >{props.attributes.title}</Container>
  )
}

interface IContainer {
  colors: IColors
}
const Container = styled.div<IContainer>`
  &:hover {
    cursor: pointer;
    color: ${ props => props.colors.primary };
    background-color: ${ props => props.colors.tertiary };
    transform: translateY(-3px) scale(103%);
    box-shadow: 0 3px 5px ${ props => props.colors.secondary };
    transition: 
      color .2s ease-in-out, 
      background-color .2s ease-in-out,
      transform .2s ease-in-out,
      box-shadow .2s ease-in-out
  }
`