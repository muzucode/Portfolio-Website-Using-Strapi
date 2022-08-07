import React from 'react'
import styled from 'styled-components';
import { CFRC } from '../../StyledComponents/StyledComponents';


export default function Header() {

  return (
    <Container className="header">
      <h2>Sean Hickey</h2>
      <Nav>
        <a href="/about">About</a>
        <NavDivider></NavDivider>
        <a href="/projects">Projects</a>
        <NavDivider></NavDivider>
        <a href="/blog">Blog</a>
      </Nav>

    </Container>
  )
}

const Container = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;

  h2 {
    margin: 0 auto 5px; 
    /* border: 1px solid red; */
    color: white;
  }

  a {
    color: white;
  }
`

const Nav = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

const NavDivider = styled.div`
  width: 20px;
`