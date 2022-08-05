import { IBlocks } from "./components/Blocks"

export interface IBasicPage {
  headerData: IHeaderData,
  pageData: IPageData
}
export interface IHeaderData {
  Title: string,
  Color: string,
  createdAt: string,
  publishedAt: string,
  updatedAt: string
}
export interface IPageData {
  Title: string,
  Body: string,
  Blocks: IBlocks,
  createdAt: string,
  publishedAt: string,
  updatedAt: string
}