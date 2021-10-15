import {Route, Switch} from "react-router-dom";
import {Cryptocurrencies, CryptoDetails, Exchanges, Homepage, News} from "../components";

export enum Paths {
  HomPage = '/',
  Exchanges  = '/exchanges',
  Cryptocurrencies = '/cryptocurrencies',
  CryptoDetails = '/crypto', // /:id 를 붙여줘야한다
  News = '/news'
}

type Props = {};

const routes = (props: Props) => {
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

export default routes
