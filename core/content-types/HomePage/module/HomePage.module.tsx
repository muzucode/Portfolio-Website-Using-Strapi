import React from 'react'
import styled from 'styled-components';
import Layout, { ILayout } from '../../../shared/Components/Layout/Layout';
import Region, { IRegion } from '../../../shared/Components/Region/Region';
import { CFC } from '../../../shared/StyledComponents/StyledComponents';
import BlogLink from '../components/BlogLink/BlogLink';
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
      <CFC>
        <VideoBackground data={props.data}>
          <Bubbles data={props.data.data.attributes.bubbles.data}/> 
        </VideoBackground>
        <NameAndTitle/>
        <WavyLayer/>
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
      <>
        <Region {...RegionHero}/>
        <Region {...RegionContent}/>
        <Region {...RegionFooter}/>
      </>
    )
  }


  return (
    <div className='home-page'>
      <Layout {...LayoutStandard}/>
    </div>
  )
}

const FlexColumn = styled(CFC)`
  
`