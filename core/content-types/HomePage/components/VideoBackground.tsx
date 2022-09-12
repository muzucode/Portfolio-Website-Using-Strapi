import React from 'react'
import styled from 'styled-components'

export default function VideoBackground() {
  return (
    <>
      <Video autoPlay muted loop>
        <source src={'/assets/bg-video.mp4'} type="video/mp4"/>
      </Video>

      <VideoOverlay/>
    </>
  )
}

const Video = styled.video`
	z-index: 0;
	position: fixed;
  right: 0;
  bottom: 0;
  width: 100vw;
`

const VideoOverlay = styled.div`
	position: absolute;
	z-index: 2;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #FFF;
	opacity: .1;
	`