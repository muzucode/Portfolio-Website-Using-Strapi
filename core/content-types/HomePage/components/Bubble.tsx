import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { IBubble } from '../interfaces/IBubble'
import { IBubbleInfo } from '../interfaces/IBubbleInfo';
import BubbleInfo from './BubbleInfo'

export default function Bubble(props: IBubble) {
	const [isVisible, setVisibility] = useState<boolean>(false);
	useEffect(() => {
		document.addEventListener("keydown", (e) => hideBubbleInfo(e));
	})
	const hideBubbleInfo = (e: globalThis.KeyboardEvent) => {
		if(e.key === "Escape") {
			setVisibility(false);
		}
	}
	const showBubbleInfo = () => {
		setVisibility(true);
		console.log('clicked here');
		console.log(isVisible);
	}
	const bubbleInfoProps: IBubbleInfo = {
		isVisible: isVisible,
		toggleVisibility: setVisibility,
		data: props.data
	}

  return (
		<>
			<Container bsColor={props.data.attributes.color_background} className='bubble' onClick={() => showBubbleInfo()}/>
			<BubbleInfo {...bubbleInfoProps}/>
		</>
  )
}

interface IContainer {
	bsColor: string
}
const Container = styled.div<IContainer>`
	
	transform: scale(1);
	box-shadow: 0 0 0px ${props => props.bsColor};
	transition: transform .2s ease-in-out, box-shadow .4s ease-in-out;
	&:hover {
		cursor: pointer;
		transform: scale(1.05);
		box-shadow: 0 0 30px ${props => props.bsColor};
		transition: transform .2s ease-in-out, box-shadow .3s ease-in-out;
	}
	
`