import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const newsApiHeader = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
  'x-rapidapi-key': '7a5497282fmsh987c4fff5ff5d47p1e8276jsn5c261faff3ac'
};

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url: string) => ({url, headers: newsApiHeader});

interface News {
  name: string,
  url: string,
  description: string
  images: {
    _type: string,
    thumbnail: {
      _type: string,
      contentUrl: string,
      width: number,
      height: number
    }
  },
  about: { _type: string, readLink: string, name: string }[],
  datePublished: string,
  category: string,
  provider: object[],
  _type: string
}

interface NewsResponse {
  queryContext: {},
  readLink: string,
  sort: object[],
  totalEstimatedMatches: number,
  value: News[],
  _type: string
}

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    getNews: builder.query<NewsResponse, { newsCategory: string, count: number }>({
      query: ({
                newsCategory = "",
                count = 10
              }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=off&textFormat=Raw&freshness=Day&count=${count}`)
    })
  })
});

export const {
  useGetNewsQuery
} = newsApi