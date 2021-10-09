import  {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptApiHeaders ={
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': '525ddb6db6msh633470ff998e67bp1b4572jsnfda048228bf9'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const  createRequest = (url) => ({
    url,
    headers: cryptApiHeaders,
})

export const cryptoNewsApi = createApi({
    reducerPath: "cryptoNewsApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: build => ({
        getCryptoNews: build.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const {useGetCryptoNewsQuery} = cryptoNewsApi;