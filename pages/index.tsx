import { NextPage } from "next";
import HomePage from "../core/content-types/HomePage/module/HomePage.module";
import { ax } from "../core/utility/Axios";

const Home: NextPage = (data: any) => {
 
  console.log(data)

  return (
    <HomePage {...data}/>
  );
}

export async function getStaticProps() {

  let res = await ax.get(`/home-page?populate=deep`);
  let pageData = res.data;

  return {
    // Passed to the page component as props
    props: { data: pageData },
  }
}

export default Home




