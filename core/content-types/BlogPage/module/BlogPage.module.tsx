import Link from 'next/link';
import React from 'react'
import Layout, { ILayout } from '../../../shared/Components/Layout/Layout';
import Region, { IRegion } from '../../../shared/Components/Region/Region';
import BlogPosts from '../components/BlogPostPreviews';
import TagsBlock from '../components/BlogPageTagsBlock';
import { IBlogPage } from '../interfaces/IBlogPage';
import BlogPageTagsBlock from '../components/BlogPageTagsBlock';

export default function BlogPage(props: IBlogPage) {

  const RegionHeader: IRegion = {
    title: 'header',
    children: (
      <>
        <Link href="/about">
          <a className='exit'>HOME</a>
        </Link>
      </>
    )
  }

  const RegionContent: IRegion = {
    title: 'content',
    children: (
      <>
        <BlogPosts {...props.data.blogPageData.data.attributes.blog_posts}></BlogPosts>
        <BlogPageTagsBlock {...props.data.tagsData}></BlogPageTagsBlock>
      </>
    )
  }
  const RegionFooter: IRegion = {
    title: 'footer',
    children: (
      <></>
    )
  }

  
  // Layouts
  const LayoutStandard: ILayout = {
    title: 'standard',
    regions: (
      <>
        <Region {...RegionHeader}/>
        <Region {...RegionContent}/>
        <Region {...RegionFooter}/>
      </>
    )
  }


  return (
    <div className='blog-page'>
      <Layout {...LayoutStandard}/>
    </div>
  )
}
