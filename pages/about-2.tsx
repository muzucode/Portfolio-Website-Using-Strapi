import { NextPage } from "next";
import styled from "styled-components";
import BasicPage from "../core/content-types/BasicPage/module/BasicPage.module";
import { Block, IBlock } from "../core/content-types/BasicPage/components/Block";
import { ax } from "../core/utility/Axios";

const About: NextPage = (data: any) => {
 
  console.log(data)

  return (
    <BasicPage {...data}/>
  );
}



export async function getServerSideProps() {

  let res = await ax.get('/basic-pages/1?populate=deep');
  let pageData = await res.data['data']['attributes'];

  return {
    props: { pageData }
  }
}


export default About




