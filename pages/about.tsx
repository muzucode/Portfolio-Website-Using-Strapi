import { NextPage } from "next";
import styled from "styled-components";
import BasicPage from "../core/collection-types/BasicPage/BasicPage";
import { Block, IBlock } from "../core/shared/Block/Block";
import { ax } from "../services/http/axios";

const About: NextPage = (data: any) => {

  const pageData = data['pageData'];
  // console.log(pageData)

  return (
    <BasicPage {...pageData}/>
  );
}



export async function getServerSideProps() {

  let res = await ax.get('/basic-pages/1?populate=deep');
  let pageData = await res.data['data']['attributes'];

  // console.log(await pageData);

  return {
    props: {pageData}, // will be passed to the page component as props
  }
}



const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
`

const MenuBar = styled.div`
  width: 100%;
  height: 50px;
  background-color: black;
  color: #979797;
  align-items: center;
  display: flex;
  justify-content: center;
`
const Brand = styled.h2`
  font-size: 16px;
  font-family: 'Ibarra Real Nova', serif;
`
const HeroImage = styled.img`
  height: 400px;
  width: 100%;
  /* border: 1px solid red; */
  background-image: url(/img-hero.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  border-style: none;
  border: none;
`



export default About