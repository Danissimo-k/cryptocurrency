import React from 'react';

import {Switch, Route} from 'react-router-dom'
import {Homepage,Exchanges, Cryptocurrencies,CryptoDetails,News } from './components'

const useRoutes = () => {
    return (
            <Switch>
                <Route exact path="/" >
                    <Homepage/>
                </Route>
                <Route exact path="/exchanges">
                    <Exchanges/>
                </Route>
                <Route exact path="/cryptocurrencies">
                    <Cryptocurrencies/>
                </Route>
                <Route exact path="/crypto/:coinId">
                    <CryptoDetails/>
                </Route>
                <Route exact path="/news">
                    <News/>
                </Route>
            </Switch>
    );
};

export default useRoutes;
