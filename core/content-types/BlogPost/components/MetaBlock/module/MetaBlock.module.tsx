import React from 'react'
import Score from '../components/Score'
import Authors from '../components/Authors'
import PublishDate from '../components/PublishDate'
import Tags from '../components/Tags'
import { IMetaBlock } from '../interfaces/IMetaBlock'
import styled from 'styled-components'

export default function MetaBlock(props: IMetaBlock) {
  return (
    <Container className='meta-block'>
      <Authors content={props.authors}></Authors>
      <PublishDate content={props.publishedAt}></PublishDate>
      <Score content={props.score}></Score>
      <Tags content={props.tags}></Tags>
    </Container>
  )
}

const Container = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`