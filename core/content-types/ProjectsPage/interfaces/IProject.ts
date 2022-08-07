import { IImage } from "../../../shared/Interfaces/Image/IImage"

export interface IProject {
  id: number,
  attributes: {
    title: string,
    body: string,
    createdAt: string,
    publishedAt: string,
    updatedAt: string,
    image: IImage
  }
}