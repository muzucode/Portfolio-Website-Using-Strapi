import React from 'react'
import styled from 'styled-components'
import { IBubbles } from '../interfaces/IBubbles'
import './Bubbles.module.css'


export default function Bubbles(props: IBubbles) {
  return (
	<>
		<Video autoPlay muted loop>
		<source src={'/assets/bg-video.mp4'} type="video/mp4"/>
		</Video>
	
		<Container>
			<Bubble1></Bubble1>
			<Bubble2></Bubble2>
			<Bubble3></Bubble3>
			<Bubble4></Bubble4>
			<Bubble5></Bubble5>
		</Container>
	</>

  )
}

const Container = styled.div`
	height: 100vh;
	width: 100%;
	div {
		border: 1px solid #bcbcbc;
		/* box-shadow: 0px 0px 20px #cfcfcf; */
	}
`
const Bubble1 = styled.div`
	position: absolute;
	transform: translate3d(33vw, 10vh, 0);
	border-radius: 50%;
	width: 200px;
	height: 200px;
	
	background-image: url(/assets/img-nextjs.png);
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`
const Bubble2 = styled.div`
	transform: translate3d(46vw, 30vh, 0);
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
	transform: translate3d(58vw, 47vh, 0);
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
	transform: translate3d(70vw, 60vh, 0);
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
	transform: translate3d(81vw, 71vh, 0);
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

const Video = styled.video`
position: fixed;
  right: 0;
  bottom: 0;
  width: 100vw;
`