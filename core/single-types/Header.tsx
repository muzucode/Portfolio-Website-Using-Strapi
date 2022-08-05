import React from 'react'
import styled from 'styled-components';
import { ax } from '../../services/http/axios';
import { IHeaderData } from '../collection-types/BasicPage/IBasicPage';


export default function Header(props: IHeaderData) {
  return (
    <Container bgColor={props.Color}>{props.Title}</Container>
  )
}

interface IContainer {
  bgColor: string
}
const Container = styled.div<IContainer>`
  height: 100px;
  width: 100%;
  background-color: ${props => { return props.bgColor}};
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