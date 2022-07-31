import React from 'react'
import Blocks, { IBlocks } from './Blocks';

export interface IBasicPage {
  Title: string,
  Body: string,
  Blocks: IBlocks,
  createdAt: string,
  publishedAt: string,
  updatedAt: string
}
export default function BasicPage(props: IBasicPage) {

  console.log(props);

  return (
    <>
      <h2>{props.Title}</h2>
      <p>{props.Body}</p>
      <Blocks {...props.Blocks} ></Blocks>
    </>
  )
}
