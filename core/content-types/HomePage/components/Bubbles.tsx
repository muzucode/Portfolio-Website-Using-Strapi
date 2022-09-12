import React, { useState } from 'react'
import styled from 'styled-components'
import { IBubble } from '../interfaces/IBubble';
import { IBubblesData } from '../interfaces/IHomePage';
import Bubble from './Bubble';


export default function Bubbles(props: IBubblesData) {

	const renderBubbles = () => {
		var bubbles: JSX.Element[] = [];

		// Populate array with Bubble elements
		props.data.map((bubbleData, index) => {
			bubbles.push(
				<Bubble data={bubbleData} key={index}></Bubble>
			)
		})

		return bubbles;
	}


	
  return (
		<>
			<Container>
				{renderBubbles()}
			</Container>
		</>
  )
}

const Container = styled.div`
	position: absolute;
	left: 100px;
	height: 100vh;
	width: 100%;
	z-index: 3;
	div.bubble {
		transform: scale(1);
		box-shadow: 0 0 0px #92ebff;
		transition: transform .2s ease-in-out, box-shadow .4s ease-in-out;
		&:hover {
			cursor: pointer;
			transform: scale(1.05);
			box-shadow: 0 0 30px #92ebff;
			transition: transform .2s ease-in-out, box-shadow .3s ease-in-out;
		}
	}
	.bubble:nth-child(1) {
		position: absolute;
		left: 33vw;
		top: 10vh;
		border-radius: 50%;
		width: 200px;
		height: 200px;
		background-image: url(/assets/img-nextjs.png);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}
	.bubble:nth-child(3) {
	left: 46vw;
	top: 30vh;
	position: absolute;
	border-radius: 50%;
	width: 175px;
	height: 175px;
	background-image: url(/assets/img-strapi-logo.webp);
	background-position: center;
	background-repeat: no-repeat;
	background-size: 100%;
	}
	.bubble:nth-child(5) {
		left: 58vw;
	top: 47vh;
	position: absolute;
	border-radius: 50%;
	width: 150px;
	height: 150px;
	background-image: url(/assets/img-react-typescript-logo.png);
	background-position: center;
	background-repeat: no-repeat;
	background-size: 120%;
	}
	.bubble:nth-child(7) {
		left: 70vw;
	top: 60vh;
	position: absolute;
	border-radius: 50%;
	width: 125px;
	height: 125px;
	background-image: url(/assets/img-go-logo.png);
	background-position: center;
	background-repeat: no-repeat;
	background-size: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	}
	.bubble:nth-child(9) {
		left: 81vw;
	top: 71vh;
	position: absolute;
	border-radius: 50%;
	width: 100px;
	height: 100px;
	background-image: url(/assets/img-aws-logo.png);
	background-position: center center;
	background-repeat: no-repeat;
	background-size: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	}

`
const Bubble1 = styled.div`
	position: absolute;
	left: 33vw;
	top: 10vh;
	border-radius: 50%;
	width: 200px;
	height: 200px;
	background-image: url(/assets/img-nextjs.png);
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`
const Bubble2 = styled.div`
	left: 46vw;
	top: 30vh;
	position: absolute;
	border-radius: 50%;
	width: 175px;
	height: 175px;
	background-image: url(/assets/img-strapi-logo.webp);
	background-position: center;
	background-repeat: no-repeat;
	background-size: 100%;
`
const Bubble3 = styled.div`
	left: 58vw;
	top: 47vh;
	position: absolute;
	border-radius: 50%;
	width: 150px;
	height: 150px;
	background-image: url(/assets/img-react-typescript-logo.png);
	background-position: center;
	background-repeat: no-repeat;
	background-size: 120%;
`
const Bubble4 = styled.div`
	left: 70vw;
	top: 60vh;
	position: absolute;
	border-radius: 50%;
	width: 125px;
	height: 125px;
	background-image: url(/assets/img-go-logo.png);
	background-position: center;
	background-repeat: no-repeat;
	background-size: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`
const Bubble5 = styled.div`
	left: 81vw;
	top: 71vh;
	position: absolute;
	border-radius: 50%;
	width: 100px;
	height: 100px;
	background-image: url(/assets/img-aws-logo.png);
	background-position: center center;
	background-repeat: no-repeat;
	background-size: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`