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
			<Container className='bubble' onClick={() => showBubbleInfo()}/>
			<BubbleInfo {...bubbleInfoProps}/>
		</>
  )
}

const Container = styled.div`
/* border: 5px solid red; */
`