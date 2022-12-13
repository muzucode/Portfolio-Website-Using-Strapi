import React from 'react'
import Layout, { ILayout } from '../../../shared/Components/Layout/Layout';
import Region, { IRegion } from '../../../shared/Components/Region/Region';
import { CFC } from '../../../shared/StyledComponents/StyledComponents';
import Bubbles from '../components/Bubbles';
import LayerDivider from '../components/LayerDivider';
import NameAndTitle from '../components/NameAndTitle';
import VideoBackground from '../components/VideoBackground';
import WavyLayer from '../components/WavyLayer';
import { IHomePage } from '../interfaces/IHomePage';

// IHomePage is really just the JSON response of a Bubbles request.
// TODO: Abstract the interface to have bubbles and other response schemas
// as interfaces.

export default function HomePage(props: IHomePage) {
  
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
      <CFC className='container'>
        <VideoBackground data={props.data}>
          <NameAndTitle/>
          <Bubbles data={props.data.data.attributes.bubbles.data}/> 
        </VideoBackground>
        {/* <WavyLayer/> */}
      </CFC>
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
      <div className='home-page'>
        <Region {...RegionHero}/>
        <Region {...RegionContent}/>
        <Region {...RegionFooter}/>
      </div>
    )
  }


  return (
    <div className='home-page'>
      <Layout {...LayoutStandard}/>
    </div>
  )
}
