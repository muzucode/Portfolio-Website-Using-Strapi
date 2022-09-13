import Link from 'next/link';
import React, { createContext, useContext, useState } from 'react'
import Layout, { ILayout } from '../../../shared/Components/Layout/Layout';
import Region, { IRegion } from '../../../shared/Components/Region/Region';
import BlogPosts from '../components/BlogPostPreviews';
import { IBlogPage } from '../interfaces/IBlogPage';
import BlogPageTagsBlock from '../components/BlogPageTagsBlock';
import Context from '@mui/base/TabsUnstyled/TabsContext';
import { BlogPageContext, IBlogPageContext } from '../contexts/BlogPageContext';
import { IBlogPostTags } from '../interfaces/IBlogPostTags';

export default function BlogPage(props: IBlogPage) {

  // State
  const [highlightedTags, setHighlightedTags] = useState<IBlogPageContext['highlightedTags']>(null);
  const setHighlightedTagsCtx: IBlogPageContext['setHighlightedTagsCtx'] = (value) => {
    setHighlightedTags(value);
    console.log(highlightedTags)
  }

  // Regions
  const RegionHeader: IRegion = {
    title: 'header',
    children: (
      <>
        <Link href="/">
          <a className='exit'>HOME</a>
        </Link>
      </>
    )
  }
  const RegionContent: IRegion = {
    title: 'content',
    children: (
      <>
        <BlogPageContext.Provider value={{highlightedTags, setHighlightedTagsCtx}}>
          <BlogPosts {...props.data.blogPageData.data.attributes.blog_posts}></BlogPosts>
          <BlogPageTagsBlock {...props.data.tagsData}></BlogPageTagsBlock>
        </BlogPageContext.Provider>
      </>
    )
  }
  const RegionFooter: IRegion = {
    title: 'footer',
    children: (
      <></>
    )
  }
  // Layouts
  const LayoutStandard: ILayout = {
    title: 'standard',
    regions: (
      <>
        <Region {...RegionHeader}/>
        <Region {...RegionContent}/>
        <Region {...RegionFooter}/>
      </>
    )
  }


  return (
    <div className='blog-page'>
      <Layout {...LayoutStandard}/>
    </div>
  )
}
