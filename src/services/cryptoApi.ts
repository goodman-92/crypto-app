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
  socials: { name: string, type: string, url: string }[],
  totalSupply: number,
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

export interface CoinDetail extends Coin {
  allTimeHigh: {
    price: number
  },
  approvedSupply: boolean,
  circulatingSupply: number
}

type Response = {
  data: any
  status: string
}

interface CoinResponse {
  status: string,
  data: {
    base: {
      sign: string,
      symbol: string
    },
    coin: CoinDetail
  }
}

interface CoinHistoryResponse extends Response {
  data: {
    change: number,
    history: { price: string, timestamp: number }[]
  }
}

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    getCryptos: builder.query<CoinsResponse, { count?: number }>({
      query: ({count = 100}) => createRequest(`/coins?limit=${count}`)
    }),
    getCryptosDetails: builder.query<CoinResponse, { coinId?: string }>({
      query: ({coinId}) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query<CoinHistoryResponse, { coinId?: string, timePeriod: string }>({
      query: ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history/${timePeriod}`)
    })
  })
});

export const {
  useGetCryptosQuery,
  useGetCryptosDetailsQuery,
  useGetCryptoHistoryQuery
} = cryptoApi