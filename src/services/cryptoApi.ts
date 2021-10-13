import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptoApiHeader = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '7a5497282fmsh987c4fff5ff5d47p1e8276jsn5c261faff3ac'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url: string) => ({url, headers: cryptoApiHeader});

export interface Coin {
  id: number,
  uuid: string,
  slug: string,
  symbol: string,
  name: string,
  color: string,
  confirmedSupply: string,
  description: string,
  firstSeen: number,
  history: String[],
  iconType: string,
  iconUrl: string,
  change: number,
  links: { name: string, type: string, url: string }[],
  listedAt: number,
  marketCap: number,
  numberOfExchanges: number,
  numberOfMarkets: number,
  penalty: boolean,
  price: string,
  rank: number,
  socials: {name: string, type: string, url: string }[],
  totalSupply: XPathNSResolver,
  type: string,
  volume: number
  websiteUrl: string
}

export interface Stats {
  base: string,
  limit: number,
  offset: number,
  total: number,
  total24hVolume: number,
  totalExchanges: number,
  totalMarketCap: number,
  totalMarkets: number
}

interface Coins {
  base: {
    sign: string,
    symbol: string
  },
  coins: Coin[],
  stats: Stats
}

interface CoinsResponse {
  status: string,
  data: Coins
}

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl}),
  endpoints: (builder) => ({
    getCryptos: builder.query<CoinsResponse, {count?: number}>({
      query: ({count = 100 }) => createRequest(`/coins?limit=${count}`)
    })
  })
})

export const {
  useGetCryptosQuery
} = cryptoApi