import React, { useEffect } from 'react'
import styled from 'styled-components'
import { mu } from '../../../utility/Markup'
import hljs from 'highlight.js'

export interface IBody {
  content: string
}
export default function Body(props: IBody) {
  useEffect(() => {
    hljs.highlightAll();
  }, [])
  return (
    <>
      <Container dangerouslySetInnerHTML={mu(props.content)} className='body'>
      </Container>
    </>
  )
}

const Container = styled.div`

`

