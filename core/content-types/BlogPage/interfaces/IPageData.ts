import { IImage } from "../../../shared/Interfaces/Image/IImage"

export interface IPageData {
  data: {
    id: number,
    attributes: {
      title: string,
      body: string,
      blog_posts: IBlogPost[],
      HeroImage: IImage,
      createdAt: string,
      publishedAt: string,
      updatedAt: string
    }
  }
}