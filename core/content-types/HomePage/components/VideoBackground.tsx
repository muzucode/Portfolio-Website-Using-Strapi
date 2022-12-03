import React from 'react'
import styled from 'styled-components'



interface IVideoBackground {
  children: React.ReactNode;
}
export default function VideoBackground(props: IVideoBackground) {
  return (
    <>
      <VideoContainer>
        <Video autoPlay muted loop>
          <source src={'/assets/bg-video.mp4'} type="video/mp4"/>
        </Video>
        {props.children}
      </VideoContainer>
    </>
  )
}

const VideoContainer = styled.div`
  display: block;
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;


  &::before {
    opacity: .1;
    background-color: #fff;
    content: '';
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

const Video = styled.video`
  position: absolute;
  width: 100vw;
`