import React from 'react'
import styled from 'styled-components'

interface IHero {
  url: string
}
export default function Hero(props: IHero) {
  return (
    <Container className="hero" bgImg={`http://localhost:3030${props.url}`}/>
  )
}


interface IContainer {
  bgImg: string
}
const Container = styled.div<IContainer>`
  margin: 30px 0 0;
  height: 400px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-image: url(${props => props.bgImg});
  border-radius: 300px;
`