import { IBlogPostTags } from "./IBlogPostTags";

export interface IBlogPost {
  id: number,
  attributes: {
    title: string,
    body: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string
    cover: any;
    tags: IBlogPostTags
  }
}