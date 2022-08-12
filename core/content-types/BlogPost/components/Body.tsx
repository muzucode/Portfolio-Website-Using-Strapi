import React from 'react'
import styled from 'styled-components'
import { mu } from '../../../utility/Markup'

export interface IBody {
  content: string
}
export default function Body(props: IBody) {

  return (
    <Container dangerouslySetInnerHTML={mu(props.content)} className='body'/>
  )
}

const Container = styled.div`

`