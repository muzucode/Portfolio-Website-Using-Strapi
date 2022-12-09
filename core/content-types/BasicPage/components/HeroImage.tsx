import React from 'react'
import styled from 'styled-components';
import { C } from '../../../shared/StyledComponents/StyledComponents';
import { IImage } from '../../../shared/Interfaces/Image/IImage'


interface IHeroImage {
  content: IImage
}
export default function HeroImage(props: IHeroImage) {
  const data = props.content.data.attributes;
  return (
    <Container className='hero-image' backgroundImage={`url(http://${process.env.NEXT_PUBLIC_ASSETS_LOCATION}${data.url})`}/>
  )
}

interface IContainer {
  backgroundImage: string
}
const Container = styled(C)<IContainer>`
  width: 100%;
  height: 300px;
  background-image: ${p => p.backgroundImage};
  overflow: hidden;
  background-size:cover;
  background-position:center center;
  background-repeat:no-repeat;
`

const Image = styled.img`

`