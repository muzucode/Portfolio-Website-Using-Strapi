import { NextPage } from 'next';
import Router, { useRouter } from 'next/router'
import React from 'react'
import BlogPostPage from '../../../core/content-types/BlogPost/module/BlogPostPage.module';
import { ax } from '../../../core/utility/Axios';
import { enableImages } from '../../../core/utility/Markup';


const BlogPost: NextPage = (data: any) => {
  
  return (
    <BlogPostPage {...data.props.post}/>
  )
  
}

// Generates `/posts/1` and `/posts/2`
export async function getStaticPaths() {

  let paths: {params: {pid : string, rawId: string}}[] = []
  let posts = (await ax.get(`/blog-posts?populate=deep`)).data;
  let i = 0;
  posts['data'].forEach((post: any) => {
    paths.push(
      { 
        params: { 
          pid: `post-${i}`,

          rawId: (post['id'] as number).toString(),
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
  params: { pid: string, rawId: string},
  locales: any,
  locale: any,
  defaultLocale: any,
}
export async function getStaticProps(params: StaticPropsParams) {

  let res = await ax.get(`/blog-posts/${params.params.rawId}?populate=deep`);
  let pageData = res.data;
  pageData['data']['attributes']['body'] = enableImages(pageData['data']['attributes']['body'])

  return {
    // Passed to the page component as props
    props: { post: pageData },
  }
}

export async function loadPosts() {

}

export default BlogPost