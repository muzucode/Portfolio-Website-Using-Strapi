import { NextPage } from "next";
import BlogPage from "../../core/content-types/BlogPage/module/BlogPage.module";
import ChecklistPage from "../../core/content-types/ChecklistPage/module/ChecklistPage.module";


const Checklist: NextPage = (data: any) => {
 
  console.log(data)

  return (
    <ChecklistPage {...data}/>
  );


}

export async function getStaticPaths() {

}

export async function getStaticProps() {

}


export default Checklist




