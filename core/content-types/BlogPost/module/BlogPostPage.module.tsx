import React from 'react'
import CTLayout, { ICTLayout } from '../../../shared/Components/CTLayout/CTLayout';
import Region, { IRegion } from '../../../shared/Components/Region/Region';
import BackToPage from '../components/BackToPage';
import Body from '../components/Body';
import Hero from '../components/Hero';
import { IMetaBlock } from '../components/MetaBlock/interfaces/IMetaBlock';
import MetaBlock from '../components/MetaBlock/module/MetaBlock.module';
import Title from '../components/Title';
import { IBlogPost } from '../interfaces/IBlogPost';

export default function BlogPostPage(props: any) {
  // Data
  const metaBlockData: IMetaBlock =  {
    publishedAt: props.attributes.publishedAt,
    authors: props.attributes.authors,
    score: props.attributes.score,
    tags: props.attributes.tags
  }

  // Regions
  const RegionHero: IRegion = {
    title: 'hero',
    children: (
      <Hero url={
        props.attributes.cover.data ?
        props.attributes.cover.data.attributes.url :
        ''
        }/>
    )
  }

  const RegionContent: IRegion = {
    title: 'content',
    children: (
      <>
        <BackToPage text='Back' location='/blog'/>
        <Title content={props.attributes.title}/>
        <MetaBlock {...metaBlockData}></MetaBlock>
        <Body content={props.attributes.body}/>
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
