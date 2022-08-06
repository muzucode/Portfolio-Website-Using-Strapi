import React from 'react'
import styled from 'styled-components';
import { IImage } from '../../../strapi-interfaces/Image/IImage'


interface IHeroImage {
  content: IImage
}
export default function HeroImage(props: IHeroImage) {
  const data = props.content.data.attributes;
  return (
    <Container backgroundImage={`url(http://localhost:3030${data.url})`}>
    </Container>
  )
}

interface IContainer {
  backgroundImage: string
}
const Container = styled.div<IContainer>`
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