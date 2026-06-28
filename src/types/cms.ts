/**
 * Placeholder types for future CMS integration (Sanity, Contentful, etc.)
 */

export type CMSImage = {
  url: string;
  alt: string;
  width?: number;
  height?: number;
};

export type CMSBlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: unknown;
  publishedAt: string;
  author: {
    name: string;
    avatar?: CMSImage;
  };
  coverImage?: CMSImage;
  tags: string[];
};

export type CMSPage = {
  id: string;
  slug: string;
  title: string;
  seoTitle?: string;
  seoDescription?: string;
  sections: unknown[];
};
