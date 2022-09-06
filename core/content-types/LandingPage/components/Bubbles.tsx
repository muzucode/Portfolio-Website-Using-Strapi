import React from 'react'
import styled from 'styled-components'
import { IBubbles } from '../interfaces/IBubbles'


export default function Bubbles(props: IBubbles) {
  return (
		<Container>
			<Bubble1></Bubble1>
			<Bubble2></Bubble2>
			<Bubble3></Bubble3>
			<Bubble4></Bubble4>
			<Bubble5></Bubble5>
		</Container>
  )
}

const Container = styled.div`
	height: 100vh;
	width: 100%;
`
const Bubble1 = styled.div`
	position: absolute;
	transform: translate3d(33vw, 10vh, 0);
	border-radius: 50%;
	width: 200px;
	height: 200px;
	border: 1px solid #000;
`
const Bubble2 = styled.div`
	transform: translate3d(45vw, 30vh, 0);
	position: absolute;
	border-radius: 50%;
	width: 175px;
	height: 175px;
	border: 1px solid #000;
`
const Bubble3 = styled.div`
	transform: translate3d(58vw, 47vh, 0);
	position: absolute;
	border-radius: 50%;
	width: 150px;
	height: 150px;
	border: 1px solid #000;
`
const Bubble4 = styled.div`
	transform: translate3d(70vw, 60vh, 0);
	position: absolute;
	border-radius: 50%;
	width: 125px;
	height: 125px;
	border: 1px solid #000;
`
const Bubble5 = styled.div`
	transform: translate3d(81vw, 71vh, 0);
	position: absolute;
	border-radius: 50%;
	width: 100px;
	height: 100px;
	border: 1px solid #000;
`