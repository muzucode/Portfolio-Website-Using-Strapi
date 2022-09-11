import React from 'react'
import styled from 'styled-components'
import { IBubble } from '../interfaces/IBubble'

export default function Bubble(props: IBubble) {
  return (
    <Container {...props}></Container>
  )
}

const Container = styled.div`
	&#bubble-1 {
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
	&#bubble-2 {
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
	&#bubble-3 {
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
	&#bubble-4 {
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
	&#bubble-5 {
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
	&.active {
		/* border: 4px solid #92ebff;
		box-shadow: 0 0 30px #92ebff; */
	}
`