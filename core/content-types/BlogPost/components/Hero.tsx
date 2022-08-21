import React from 'react'
import styled from 'styled-components'

interface IHero {
  url: string
}
export default function Hero(props: IHero) {

  // Set placeholder if no image in place
  const background = props.url ? `http://localhost:3030${props.url}` : '/assets/img-placeholder.jpg'
  // Set styles
  const styles = {
    margin: '30px 0 0',
    height: '400px',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    borderRadius: '300px',
    backgroundImage: `url(${background})`
  }

  return (
    <div className="hero" style={styles}/>
  )
}