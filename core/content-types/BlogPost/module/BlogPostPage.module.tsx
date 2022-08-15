import Link from 'next/link';
import React, { useEffect } from 'react'
import Layout, { ILayout } from '../../../shared/Components/Layout/Layout';
import Region, { IRegion } from '../../../shared/Components/Region/Region';
import { skewer } from '../../../utility/TagsParser';
import Body, { IBody } from '../components/Body';
import Hero from '../components/Hero';
import Title from '../components/Title';
import { IBlogPost } from '../interfaces/IBlogPost';

export default function BlogPostPage(props: IBlogPost) {


  const RegionHeader: IRegion = {
    title: 'header',
    children: (
      <>
      </>
    )
  }

  const RegionHero: IRegion = {
    title: 'hero',
    children: (
      <>
        <Hero url={props.data.attributes.cover.data.attributes.url}/>
      </>
    )
  }

  const RegionContent: IRegion = {
    title: 'content',
    children: (
      <>
        <Title content={props.data.attributes.title}/>
        <Body content={props.data.attributes.body}/>
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
        <Region {...RegionHero}/>
        <Region {...RegionContent}/>
        <Region {...RegionFooter}/>
      </>
    )
  }


  return (
    <div className={`blog-post blog-post-${skewer(props.data.attributes.title)}`}>
      <Layout {...LayoutStandard}/>
    </div>
  )
}
