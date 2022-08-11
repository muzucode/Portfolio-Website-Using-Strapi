import React from 'react'
import styled from 'styled-components'
import { C } from '../../../shared/StyledComponents/StyledComponents'
import { skewer } from '../../../utility/TagsParser'
import { IProjectBlock } from '../interfaces/IProjectBlock'

export default function ProjectBlock(props: IProjectBlock) {

  interface IBlockStyles {
    border: string,
    color: string,
    backgroundColor: string,
  }
  const blockStyles: IBlockStyles = {
    backgroundColor: props.backgroundColor,
    border: `2px solid ${props.borderColor}`,
    color: props.fontColor,
  }

  const blockFooterStyles = {
    width: '100%',
    height: '25px',
    backgroundColor: props.borderColor,
  }

  function createMarkup() {
    return {__html: props.project.data.attributes.body};
  }

  return (
    <div style={blockStyles} className={`project-block project-block__${skewer(props.title)}`}>
      <div className='content'>
        <h3>{props.project.data.attributes.title}</h3>
        <div dangerouslySetInnerHTML={createMarkup()}></div>
      </div>
      <div style={blockFooterStyles} className='footer'>
        <span>Stack: Next.JS (TypeScript), Strapi</span>
      </div>
    </div>
  )
}
