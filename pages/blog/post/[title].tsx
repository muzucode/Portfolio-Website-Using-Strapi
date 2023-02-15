import { NextPage } from 'next';
import Router, { useRouter } from 'next/router'
import React from 'react'
import BlogPostPage from '../../../core/content-types/BlogPost/module/BlogPostPage.module';
import { ax } from '../../../core/utility/Axios';
import { enableImages } from '../../../core/utility/Markup';


const BlogPost: NextPage = ({pageData} : any) => {
  
  return (
    <BlogPostPage {...pageData}/>
  )
  
}

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  let paths: {params: {title : string}}[] = []
  let posts = (await ax.get(`/blog-posts?populate=deep`)).data;
  let i = 0;
  posts['data'].forEach((post: any) => {
    let slug = post['attributes']['title'] as string
    slug = encodeURI(slug)

    paths.push(
      { 
        params: { 
          title: slug,
        } 
      }
    )
    i++;
  });

  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  }
}

// `getStaticPaths` requires using `getStaticProps`
interface StaticPropsParams {
  params: { title: string},
  locales: any,
  locale: any,
  defaultLocale: any,
}
export async function getStaticProps(params: StaticPropsParams) {
  let res = await ax.get(`/blog-posts/?filters[title][$eq]=${params.params.title}&populate=deep`);
  let pageData = await res.data['data'][0];

  return {
    // Passed to the page component as props
    props: { pageData },
  }
}

export async function loadPosts() {

}

export default BlogPost