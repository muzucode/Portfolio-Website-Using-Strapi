import { NextPage } from "next";
import styled from "styled-components";
import BasicPage from "../core/collection-types/BasicPage/module/BasicPage";
import { Block, IBlock } from "../core/shared/Block/Block";
import { ax } from "../services/http/axios";

const About: NextPage = (data: any) => {
 
  console.log(data)

  return (
    <BasicPage {...data}/>
  );
}



export async function getServerSideProps() {

  let res = await ax.get('/basic-pages/1?populate=deep');
  let pageData = await res.data['data']['attributes'];

  let res2 = await ax.get('/header?populate=deep');
  let headerData = await res2.data['data']['attributes'];

  // console.log(await pageData);

  return {
    props: { headerData, pageData }, // will be passed to the page component as props
  }
}


export default About