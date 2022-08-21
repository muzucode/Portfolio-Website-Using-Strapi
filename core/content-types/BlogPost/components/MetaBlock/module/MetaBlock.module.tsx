import React from 'react'
import Score from '../components/Score'
import Author from '../components/Author'
import PublishDate from '../components/PublishDate'
import Tags from '../components/Tags'
import { IMetaBlock } from '../interfaces/IMetaBlock'
import styled from 'styled-components'

export default function MetaBlock(props: IMetaBlock) {
  return (
    <Container className='meta-block'>
        <Author content={props.author}></Author>
        <PublishDate content={props.publishedAt}></PublishDate>
        <Score content={props.score}></Score>
        <Tags content={props.tags}></Tags>
    </Container>
  )
}

const Container = styled.div`
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  div:first-child {
    color: red !important;
    width: 100%;
  }
`