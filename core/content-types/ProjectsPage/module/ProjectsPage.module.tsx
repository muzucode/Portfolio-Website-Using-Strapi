import React from 'react'
import Layout, { ILayout } from '../../../shared/Components/Layout/Layout';
import Region, { IRegion } from '../../../shared/Components/Region/Region';
import Body from '../components/Body';
import HeroImage from '../components/HeroImage';
import ProjectBlocks from '../components/ProjectBlocks';
import Projects from '../components/ProjectBlocks';
import Title from '../components/Title';
import { IProjectsPage } from '../interfaces/IProjectsPage';

export default function ProjectsPage(props: IProjectsPage) {
  
  // Regions
  const RegionHero: IRegion = {
    title: 'hero',
    children: (
      <>
        <HeroImage content={props.pageData.data.attributes.HeroImage}></HeroImage>
      </>
    )
  }
  const RegionContent: IRegion = {
    title: 'content',
    children: (
      <>
        <Title content={props.pageData.data.attributes.title}/>
        <Body content={props.pageData.data.attributes.body}/>
        <ProjectBlocks content={props.pageData.data.attributes.project_blocks}></ProjectBlocks>
      </>
    )
  }
  
  // Layouts
  const LayoutStandard: ILayout = {
    title: 'projects',
    regions: (
      <>
        <Region {...RegionHero}/>
        <Region {...RegionContent}/>
      </>
    )
  }


  return (
    <Layout {...LayoutStandard}/>
  )
}
