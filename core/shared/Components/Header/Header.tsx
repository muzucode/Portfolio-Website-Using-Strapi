import { useRouter } from 'next/router';
import React from 'react'
import styled from 'styled-components';
import { CFRC } from '../../StyledComponents/StyledComponents';


export default function Header() {

  const router = useRouter()

  const getActiveStatus = (path: string): string => {
    if(router.pathname === path) {
      return 'active'
    } else {
      return ''
    };
  }

  return (
    <div className={
      router.pathname.indexOf('/blog') >= 0 ||
      router.pathname.indexOf('/about') >= 0 ? 'visually-hidden' : ''}>
    <Container className="header">
      <h2>Sean Hickey</h2>
      <Nav>
        <a href="/about" className={getActiveStatus('/about')} >About</a>
        <NavDivider></NavDivider>
        <a href="/blog"  className={getActiveStatus('/blog')}>Blog</a>
      </Nav>

    </Container>

    </div>

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

  a.active {
    color: #3aa6ff;
  }
`

const NavDivider = styled.div`
  width: 20px;
`