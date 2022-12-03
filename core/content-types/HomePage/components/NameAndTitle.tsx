import React from 'react'
import styled from 'styled-components'

export default function NameAndTitle() {
  return (
    <NameContainer>
        <Name>Sean<br/>Hickey</Name>
        <Subtitle>Web Application Developer</Subtitle>
    </NameContainer>
  )
}

const NameContainer = styled.div`
	position: absolute;
	bottom: 100px;
	left: 180px;
	z-index: 1;
`
const Name = styled.h1`
	font-size: 200px;
	color: white;
	line-height: 170px;
	margin: 0;
`
const Subtitle = styled.h2`
	margin: -20px 0 0;
	position: relative;
	left: 15px;
	color: #fff;
	font-style: italic;
	font-size: 40px;
	/* background-color: #fff; */
	width: fit-content;
	/* padding: 0px 20px; */
	text-align: left;
`