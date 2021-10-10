import {Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './components';
import './App.css'
import {Layout, Space, Typography} from "antd";
import {Route, Link, Switch} from "react-router-dom";
import {Paths} from "./App.type";


type Props = {};


const App = (props: Props) => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="main">
         <Layout>
           <div className="routes">
             <Switch>
               <Route exact path={Paths.HomPage}><Homepage/></Route>
               <Route exact path={Paths.Exchanges}><Exchanges/></Route>
               <Route exact path={Paths.Cryptocurrencies}><Cryptocurrencies/></Route>
               <Route exact path={Paths.CryptoDetails}><CryptoDetails/></Route>
               <Route exact path={Paths.News}><News/></Route>
             </Switch>
           </div>
         </Layout>
        <div className="footer" >
          <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
            Cryptoverse <br />
            All rights reserverd
          </Typography.Title>
          <Space>
            <Link to={Paths.HomPage}>Home</Link>
            <Link to={Paths.Exchanges}>Exchange</Link>
            <Link to={Paths.News}>News</Link>
          </Space>
        </div>
      </div>

    </div>
  );
};

export default App