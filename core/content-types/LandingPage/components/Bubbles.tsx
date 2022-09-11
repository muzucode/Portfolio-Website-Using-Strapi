import React, { KeyboardEvent, useEffect, useState } from 'react'
import styled from 'styled-components'
import { IBubble } from '../interfaces/IBubble';
import { IBubbleInfo } from '../interfaces/IBubbleInfo';
import { IBubbles } from '../interfaces/IBubbles'
import Bubble from './Bubble';
import BubbleInfo from './BubbleInfo';


export default function Bubbles(props: IBubbles) {
	const [activeBubble, setActiveBubble] = useState<number>(0);
	const [isVisible, setVisibility] = useState<boolean>(false);
	
	const bubbleProps = (num: number): IBubble => {
		return {
			className: activeBubble === num ? 'active' : '',
			id: `bubble-${num}`,
			onClick: () => { 
				setActiveBubble(num);
				showBubbleInfo(num);
			}
		}
	}
	const bubbleInfoProps: IBubbleInfo = {
		isVisible: isVisible,
		bubbleNumber: activeBubble,
		toggleVisibility: setVisibility,
	}
	const showBubbleInfo = (num: number) => {
		setVisibility(true);
	}
	const hideBubbleInfo = (e: KeyboardEvent) => {
		if(e.key === "Escape") {
			setVisibility(false);
		}
	}

	useEffect(() => {
		document.addEventListener("keydown", hideBubbleInfo)
	})
	
  return (
		<>
			<BubbleInfo {...bubbleInfoProps}/>
			<Container>
				<Bubble {...bubbleProps(1)}></Bubble>
				<Bubble {...bubbleProps(2)}></Bubble>
				<Bubble {...bubbleProps(3)}></Bubble>
				<Bubble {...bubbleProps(4)}></Bubble>
				<Bubble {...bubbleProps(5)}></Bubble>
			</Container>
		</>
  )
}

const Container = styled.div`
	position: relative;
	left: 100px;
	height: 100vh;
	width: 100%;
	z-index: 3;
	div {
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