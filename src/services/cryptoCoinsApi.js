import  {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '525ddb6db6msh633470ff998e67bp1b4572jsnfda048228bf9'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const  createRequest = (url) => ({
    url,
    headers: cryptApiHeaders,
})

export const cryptoCoinsApi = createApi({
    reducerPath: "cryptoCoinsApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: build => ({
        getCryptos: build.query({
                query: (count) => createRequest(`/coins?limit=${count}`)
            }),
        getCryptoDetails: build.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: build.query({
            query: ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history/${timePeriod}`)
        }),
        getExchanges: build.query({
            query: () => createRequest(`/exchanges`)
        }),
    })
})

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
    useGetExchangesQuery,
} = cryptoCoinsApi