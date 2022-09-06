import React from 'react'
import Layout, { ILayout } from '../../../shared/Components/Layout/Layout';
import Region, { IRegion } from '../../../shared/Components/Region/Region';
import Bubbles from '../components/Bubbles';
import { ILandingPage } from '../interfaces/ILandingPage';

export default function LandingPage(props: ILandingPage) {
  
  // Regions
  const RegionHero: IRegion = {
    title: 'hero',
    children: (
      <>
      </>
    )
  }
  const RegionContent: IRegion = {
    title: 'content',
    children: (
      <>
        <Bubbles></Bubbles>
      </>
    )
  }
  const RegionFooter: IRegion = {
    title: 'footer',
    children: (
      <>
      </>
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
    <div className='landing-page'>
      <Layout {...LayoutStandard}/>
    </div>
  )
}
