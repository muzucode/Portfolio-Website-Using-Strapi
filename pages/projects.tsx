import { NextPage } from "next";
import ProjectsPage from "../core/content-types/ProjectsPage/module/ProjectsPage.module";
import { ax, getAll, QueryConfig } from "../core/utility/Axios";

const Projects: NextPage = (data: any) => {
 
  console.log(data)

  return (
    <ProjectsPage {...data}/>
  );
}



export async function getServerSideProps() {

  let res = await ax.get('/projects-page?populate=deep');
  let pageData = await res.data;

  return {
    props: { pageData }
  }
}


export default Projects




