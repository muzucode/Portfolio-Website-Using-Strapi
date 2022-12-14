import React, { useState } from 'react'
import styled from 'styled-components'
import { IBubblesData } from '../interfaces/IHomePage';
import BlogLink from './BlogLink/BlogLink';
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
			<div className='bubbles'>
				{renderBubbles()}
				<BlogLink/>
			</div>
		</>
  )
}
