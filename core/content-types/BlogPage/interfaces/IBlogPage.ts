import { IBlogPageData } from "./IBlogPageData"
import { IBlogPostTags } from "./IBlogPostTags"

export interface IBlogPage {
  data: {
    blogPageData: IBlogPageData,
    tagsData: IBlogPostTags
  }
}