import { NextPage } from "next";
import styled from "styled-components";
import BasicPage from "../../core/content-types/BasicPage/module/BasicPage.module";
import BlogPage from "../../core/content-types/BlogPage/module/BlogPage.module";
import { Block, IBlock } from "../../core/shared/Components/Block/Block";
import { ax, getAll, QueryConfig } from "../../core/utility/Axios";


const Blog: NextPage = (data: any) => {
 
  console.log(data)

  return (
    <BlogPage {...data}/>
  );
}



export async function getServerSideProps() {

  let res = await ax.get('/blog-page?populate=deep');
  let blogPageData = await res.data;

  let res2 = await ax.get('/blog-post-tags?populate=deep');
  let tagsData = await res2.data;


  return {
    props: {data: {blogPageData, tagsData }}
  }
}


export default Blog




