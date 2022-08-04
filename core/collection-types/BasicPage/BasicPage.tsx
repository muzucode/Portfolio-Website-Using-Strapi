import React from 'react'
import Layout, { ILayout } from '../../shared/Layout/Layout';
import Region, { IRegion } from '../../shared/Region/Region';
import Blocks, { IBlocks } from './components/Blocks';
import Body from './components/Body';
import Title from './components/Title';

export interface IBasicPage {
  Title: string,
  Body: string,
  Blocks: IBlocks,
  createdAt: string,
  publishedAt: string,
  updatedAt: string
}

export default function BasicPage(props: IBasicPage) {
  
  // Regions
  const Header: IRegion = {
    title: 'header',
    children: (
      <>This is my header</>
    )
  }
  const Content: IRegion = {
    title: 'content',
    children: (
      <>
        <Title content={props.Title}/>
        <Body content={props.Body}/>
        <Blocks {...props.Blocks}/>
      </>
    )
  }
  const Footer: IRegion = {
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
        <Region {...Header}/>
        <Region {...Content}/>
        <Region {...Footer}/>
      </>
    )
  }
  const LayoutNone: ILayout = {
    title: 'alpha',
    regions: (
      <>
      </>
    )
  }


  return (
    <Layout {...LayoutStandard}/>
  )
}
