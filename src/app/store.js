import {configureStore} from "@reduxjs/toolkit";

import {cryptoCoinsApi} from "../services/cryptoCoinsApi";
import {cryptoNewsApi} from "../services/cryptoNewsApi";

export default configureStore({
    reducer: {
    [cryptoCoinsApi.reducerPath]: cryptoCoinsApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    },

})