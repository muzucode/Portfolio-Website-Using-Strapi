import React from 'react'
import styled from 'styled-components';
import { ax } from '../../services/http/axios';
import { IHeaderData } from '../collection-types/BasicPage/interfaces/IHeaderData';


export default function Header(props: IHeaderData) {

  const ContainerProps: IContainer = {
    backgroundColor: props.backgroundColor,
    fontColor: props.fontColor
  }
  return (
    <Container 
    className="header" 
    {...ContainerProps}>
      <h2>{props.title}</h2>
    </Container>
  )
}

interface IContainer {
  backgroundColor: string,
  fontColor: string,
}
const Container = styled.div<IContainer>`
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => { return p.backgroundColor}};

  h2 {
    margin: 0;
    color: ${p => { return p.fontColor}};
  }
`

interface ITitle {
  fontColor: string
}
const Title = styled.h2<ITitle>`
  
`

export async function getServerSideProps() {
  console.log('entered');
  let res = await ax.get('/header?populate=deep');
  let headerData = await res.data['data']['attributes'];
  console.log(headerData);

  // console.log(await pageData);

  return {
    props: {headerData}, // will be passed to the page component as props
  }
}