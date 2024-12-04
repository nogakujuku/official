import type { MicroCMSQueries } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  concept?: string;
  img?: {
    url: string;
  };
};
export type BlogResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Blog[];
};

//APIの呼び出し
export const getBlogs = async (queries?: MicroCMSQueries) => {
  return await client.get<BlogResponse>({ endpoint: "projects", queries });
};
export const getBlogDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Blog>({
    endpoint: "projects",
    contentId,
    queries,
  });
};

export type Media = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  publishedDate: string;
  tags: string;
  link: string;
};
export type MediaResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Media[];
};

export type Gallery = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
};

export type GalleryResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Gallery[];
};

//APIの呼び出し
export const getMedias = async (queries?: MicroCMSQueries) => {
  return await client.get<MediaResponse>({ endpoint: "media", queries });
};

//APIの呼び出し
export const getGallery = async (queries?: MicroCMSQueries) => {
  return await client.get<GalleryResponse>({ endpoint: "gallery", queries });
};
