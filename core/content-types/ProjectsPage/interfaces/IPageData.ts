import { IImage } from "../../../shared/Interfaces/Image/IImage"
import { IProjectBlock } from "./IProjectBlock"

export interface IPageData {
  data: {
    id: number,
    attributes: {
      title: string,
      body: string,
      project_blocks: IProjectBlock[],
      HeroImage: IImage,
      createdAt: string,
      publishedAt: string,
      updatedAt: string
    }
  }
}