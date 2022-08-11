import { IImage } from "../../../shared/Interfaces/Image/IImage"
import { IBlogPost } from "./IBlogPost"
import { IBlogPosts } from "./IBlogPosts"

export interface IPageData {
  data: {
    id: number,
    attributes: {
      title: string,
      body: string,
      blog_posts: {
        data: IBlogPost[]
      },
      createdAt: string,
      publishedAt: string,
      updatedAt: string
    }
  }
}