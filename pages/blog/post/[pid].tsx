import { NextPage } from 'next';
import Router, { useRouter } from 'next/router'
import React from 'react'
import BlogPostPage from '../../../core/content-types/BlogPost/module/BlogPostPage.module';
import { ax } from '../../../core/utility/Axios';
import { enableImages } from '../../../core/utility/Markup';


const BlogPost: NextPage = (data: any) => {

  return (
    <BlogPostPage {...data.post}/>
  )
  
}

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: '1' } }, 
      { params: { pid: '2' } },
      { params: { pid: '6' } },
      { params: { pid: '8' } },
      { params: { pid: '9' } },
    ],
    fallback: false, // can also be true or 'blocking'
  }
}

// `getStaticPaths` requires using `getStaticProps`
interface StaticPropsParams {
  params: { pid: string},
  locales: any,
  locale: any,
  defaultLocale: any,
}
export async function getStaticProps(params: StaticPropsParams) {

  let res = await ax.get(`/blog-posts/${params.params.pid}?populate=deep`);
  let pageData = res.data;
  pageData['data']['attributes']['body'] = enableImages(pageData['data']['attributes']['body'])

  return {
    // Passed to the page component as props
    props: { post: pageData },
  }
}

export default BlogPost