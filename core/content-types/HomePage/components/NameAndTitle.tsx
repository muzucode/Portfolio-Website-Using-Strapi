import React from 'react'
import styled from 'styled-components'

export default function NameAndTitle() {
  return (
    <NameContainer className='name-container'>
        <Name className='name'>Sean <br/><span></span>Hickey</Name>
        <Subtitle className='subtitle'>Web Application Developer</Subtitle>
    </NameContainer>
  )
}

const NameContainer = styled.div`

`
const Name = styled.h1`

`
const Subtitle = styled.h2`

`