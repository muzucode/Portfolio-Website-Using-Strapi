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

`

const Video = styled.video`

`