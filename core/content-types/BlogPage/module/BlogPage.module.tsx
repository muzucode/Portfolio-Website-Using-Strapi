import Link from 'next/link';
import React from 'react'
import Layout, { ILayout } from '../../../shared/Components/Layout/Layout';
import Region, { IRegion } from '../../../shared/Components/Region/Region';
import BlogPosts from '../components/BlogPosts';
import { IBlogPage } from '../interfaces/IBlogPage';

export default function BlogPage(props: IBlogPage) {

  const RegionHero: IRegion = {
    title: 'hero',
    children: (
      <>
        <Link href="/about">
          <a>Head back to about page...</a>
        </Link>
      </>
    )
  }

  const RegionContent: IRegion = {
    title: 'content',
    children: (
      <>
        <BlogPosts {...props.pageData.data.attributes.blog_posts}></BlogPosts>
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
        <Region {...RegionHero}/>
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
