import { NextPage } from "next";
import LandingPage from "../core/content-types/LandingPage/module/LandingPage.module";
import { ax } from "../core/utility/Axios";

const Home: NextPage = (data: any) => {
 
  console.log(data)

  return (
    <LandingPage {...data}/>
  );
}


export default Home




