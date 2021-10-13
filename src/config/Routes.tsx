import {Route, Switch} from "react-router-dom";
import {Paths} from "../App.type";
import {Cryptocurrencies, CryptoDetails, Exchanges, Homepage, News} from "../components";

import React from 'react';

type Props = {};

const Routes = (props: Props) => {
  return (
    <div className="routes">
      <Switch>
        <Route exact path={Paths.HomPage}><Homepage/></Route>
        <Route exact path={Paths.Exchanges}><Exchanges/></Route>
        <Route exact path={Paths.Cryptocurrencies}><Cryptocurrencies/></Route>
        <Route exact path={`${Paths.CryptoDetails}/:id`}><CryptoDetails/></Route>
        <Route exact path={Paths.News}><News/></Route>
      </Switch>
    </div>
  );
};

export default Routes
