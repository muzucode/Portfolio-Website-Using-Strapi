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
                <p id='quote'>Greetings, and welcome to my website!  I'm a self-taught web developer with extensive experience in full-stack web development.  I thoroughly enjoy working with TypeScript React, NextJS, and headless content-management domains.  I also get a kick out of all the neat cloud technologies at developers' disposal!  This site is hosted on AWS!</p>
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
