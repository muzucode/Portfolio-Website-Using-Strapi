import { createContext, useContext } from "react";
import { IBlogPostTags } from "../interfaces/IBlogPostTags";

  // Contexts
  export interface IBlogPageContext {
    highlightedTags: IBlogPostTags | null,
    setHighlightedTagsCtx: (tags: IBlogPostTags | null) => void
  }
  export const BlogPageContext = createContext<IBlogPageContext | undefined>(undefined);
  export const useBlogPageContext = () => useContext(BlogPageContext) as IBlogPageContext;