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
  // console.log(props.data.data.attributes.bubbles);
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
        <VideoBackground data={props.data}/>
        <div className='homepage-mobile'>
          <NameAndTitle/>

          {/* Portrait */}
          <div className='section' id='portrait'>
            <div className='half'>
              <img src="/assets/img-sean.jpeg"/>
            </div>            
            <div className='half'>
              <div className='content'>
                <h2>What's up!</h2>
                <div className='divider'></div>
                <p id='quote'>I'm a self-taught developer turned Computer Science grad student currently working as a full-stack dev in the industry.  I enjoy working within React, NextJS, and headless CMS domains.  Servers or <i>serverless</i>... I've been there and done that.  Keep scrolling to find out more!</p>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className='section' id='technologies'>
            <h2 className='section-title'>Technologies</h2>
            <Bubbles data={props.data.data.attributes.bubbles.data}/>
          </div>


        </div>
        <div className='homepage-desktop'>
          <NameAndTitle/>
          <Bubbles data={props.data.data.attributes.bubbles.data}/>
        </div>
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
