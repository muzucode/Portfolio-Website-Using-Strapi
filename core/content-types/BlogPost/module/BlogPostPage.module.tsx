import React from 'react'
import CTLayout, { ICTLayout } from '../../../shared/Components/CTLayout/CTLayout';
import CTWrapper from '../../../shared/Components/CTWrapper/CTWrapper';
import { ILayout } from '../../../shared/Components/Layout/Layout';
import Region, { IRegion } from '../../../shared/Components/Region/Region';
import Body from '../components/Body';
import Hero from '../components/Hero';
import { IMetaBlock } from '../components/MetaBlock/interfaces/IMetaBlock';
import MetaBlock from '../components/MetaBlock/module/MetaBlock.module';
import Title from '../components/Title';
import { IBlogPost } from '../interfaces/IBlogPost';

export default function BlogPostPage(props: IBlogPost) {

  // Regions
  const RegionHero: IRegion = {
    title: 'hero',
    children: (
      <Hero url={
        props.data.attributes.cover.data ?
        props.data.attributes.cover.data.attributes.url :
        ''
        }/>
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
      <>
        <Title content={props.data.attributes.title}/>
        <MetaBlock {...metaBlockData}></MetaBlock>
        <Body content={props.data.attributes.body}/>
      </>
    )
  }
  // Layouts
  const LayoutStandard: ICTLayout = {
    contentType: 'blog-post',
    title: 'standard',
    insideArticleTag: true,
    regions: (
      <>
        <Region {...RegionHero}/>
        <Region {...RegionContent}/>
      </>
    )
  }

  return (
    <CTLayout {...LayoutStandard}/>
  )
}
