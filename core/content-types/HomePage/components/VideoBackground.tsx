import React from 'react'
import styled from 'styled-components'



interface IVideoBackground {
  children: React.ReactNode;
  data: any
}
export default function VideoBackground(props: IVideoBackground) {
  return (
    <>
      <VideoContainer className='video-container'>
        <Video className='video' autoPlay muted loop controlsList='nodownload'>
          <source src={`${process.env.NEXT_PUBLIC_API_URI}${props['data']['data']['attributes']['background']['data']['attributes']['url']}`} type="video/mp4"/>
        </Video>
        {props.children}
      </VideoContainer>
    </>
  )
}

const VideoContainer = styled.div`
  display: block;
  position: fixed;
  height: 100%;
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
    height: 100%;
    width: 177.77777778vh; /* 100 * 16 / 9 */
    min-width: 100%;
    min-height: 56.25vw; /* 100 * 9 / 16 */
`