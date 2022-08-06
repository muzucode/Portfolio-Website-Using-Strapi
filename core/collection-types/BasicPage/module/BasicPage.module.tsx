import React from 'react'
import Layout, { ILayout } from '../../../shared/Layout/Layout';
import Region, { IRegion } from '../../../shared/Region/Region';
import Header from '../../../single-types/Header';
import Blocks from '../components/Blocks';
import Body from '../components/Body';
import HeroImage from '../components/HeroImage';
import Title from '../components/Title';
import { IBasicPage } from '../interfaces/IBasicPage';

export default function BasicPage(props: IBasicPage) {
  
  // Regions
  const RegionHeader: IRegion = {
    title: 'header',
    children: (
      <>
        <Header {...props.headerData}></Header>
      </>
    )
  }
  const RegionHero: IRegion = {
    title: 'hero',
    children: (
      <>
        <HeroImage content={props.pageData.heroImage}></HeroImage>
      </>
    )
  }
  const RegionContent: IRegion = {
    title: 'content',
    children: (
      <>
        <Title content={props.pageData.Title}/>
        <Body content={props.pageData.Body}/>
        <Blocks {...props.pageData.Blocks}/>
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
    title: 'alpha',
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
    <Layout {...LayoutStandard}/>
  )
}
