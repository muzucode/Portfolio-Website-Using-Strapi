import { NextPage } from "next";
import styled from "styled-components";
import BasicPage from "../core/content-types/BasicPage/module/BasicPage.module";
import { Block, IBlock } from "../core/shared/Components/Block/Block";
import { ax, getAll, QueryConfig } from "../core/utility/Axios";


const Blog: NextPage = (data: any) => {
 
  console.log(data)

  return (
    <BasicPage {...data}/>
  );
}



export async function getServerSideProps() {

  let res = await ax.get('/basic-pages/3?populate=deep');
  let pageData = await res.data['data']['attributes'];

  return {
    props: { pageData }
  }
}


export default Blog




