import Link from 'next/link';
import React, { useEffect } from 'react'
import CTLayout from '../../../shared/Components/CTLayout/CTLayout';
import CTWrapper from '../../../shared/Components/CTWrapper/CTWrapper';
import Layout, { ILayout } from '../../../shared/Components/Layout/Layout';
import Region, { IRegion } from '../../../shared/Components/Region/Region';
import RegionWrapper from '../../../shared/Components/RegionWrapper/RegionWrapper';
import { skewer } from '../../../utility/TagsParser';
import Body, { IBody } from '../components/Body';
import Hero from '../components/Hero';
import { IMetaBlock } from '../components/MetaBlock/interfaces/IMetaBlock';
import MetaBlock from '../components/MetaBlock/module/MetaBlock.module';
import Title from '../components/Title';
import { IBlogPost } from '../interfaces/IBlogPost';

export default function BlogPostPage(props: IBlogPost) {

  // Regions
  const RegionHeader: IRegion = {
    title: 'header',
    children: (
      <RegionWrapper title='header'>
      </RegionWrapper>
    )
  }
  const RegionHero: IRegion = {
    title: 'hero',
    children: (
      <RegionWrapper title='hero'>
        <Hero url={
          props.data.attributes.cover.data ?
          props.data.attributes.cover.data.attributes.url :
          ''
          }/>
      </RegionWrapper>
    )
  }
  const metaBlockData: IMetaBlock =  {
    publishedAt: props.data.attributes.publishedAt,
    author: 'Sean',
    score: 600,
    tags: ['Sean', 'React']
  }
  const RegionContent: IRegion = {
    title: 'content',
    children: (
      <RegionWrapper title='content'>
        <Title content={props.data.attributes.title}/>
        <MetaBlock {...metaBlockData}></MetaBlock>
        <Body content={props.data.attributes.body}/>
      </RegionWrapper>
    )
  }
  const RegionFooter: IRegion = {
    title: 'footer',
    children: (
      <RegionWrapper title='footer'>
      </RegionWrapper>
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
    <CTWrapper contentType='blog-post'>
      <CTLayout {...LayoutStandard}/>
    </CTWrapper>
  )
}
