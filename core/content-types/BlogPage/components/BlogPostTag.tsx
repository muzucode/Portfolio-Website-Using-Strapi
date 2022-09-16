import React from 'react'
import styled from 'styled-components'
import { skewer } from '../../../utility/TagsParser'
import { BlogPageContext } from '../contexts/BlogPageContext'
import { IBlogPostTag, IBlogPostTags } from '../interfaces/IBlogPostTags'

interface IColors {
  primary: string,
  secondary: string,
  tertiary: string
}

export default function BlogPostTag(props: IBlogPostTag) {

  const isTagActive = (tags: IBlogPostTags | null | undefined) => {
    // If there are any highlighted tags...
    if(tags) {
      // Check if any of the highglighted tag titles are this tag title
      let isActive = tags.data.map(function(tag: IBlogPostTag) { 
        return tag.attributes.title; 
      }).indexOf(props.attributes.title) >= 0;

      // console.log(props);
      // console.log(tags.data);
      console.log('Tag: ' + props.attributes.title + ' | Is active: ' + isActive);

      return isActive
    }
  }

  const colors: IColors = {
    primary: props.attributes.colorPrimary,
    secondary: props.attributes.colorSecondary,
    tertiary: props.attributes.colorTertiary,
  }
  return (
    <BlogPageContext.Consumer>{value => { return (
      <Container 
        className={`
        blog-post-tag 
        blog-post-tag-${skewer(props.attributes.title)}
        ${isTagActive(value?.highlightedTags) ? 'highlighted' : ''}`
        }
      colors={colors}
      >{props.attributes.title}</Container>
    )}}
    </BlogPageContext.Consumer>

  )
}

interface IContainer {
  colors: IColors
}
const Container = styled.div<IContainer>`
  transition: 
    color .2s ease-in-out, 
    background-color .2s ease-in-out,
    transform .2s ease-in-out,
    box-shadow .2s ease-in-out;
  &:hover, &.highlighted {
    cursor: pointer;
    color: ${ props => props.colors.primary };
    background-color: ${ props => props.colors.tertiary };
    transform: translateY(-3px) scale(103%);
    box-shadow: 0 3px 5px ${ props => props.colors.secondary };
    transition: 
      color .2s ease-in-out, 
      background-color .2s ease-in-out,
      transform .2s ease-in-out,
      box-shadow .2s ease-in-out;
  }
`