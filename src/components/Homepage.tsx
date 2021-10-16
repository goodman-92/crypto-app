import React, {useEffect, useState} from 'react';
import {Col, Row, Statistic, Typography} from "antd";
import {Stats, useGetCryptosQuery} from "../services/cryptoApi";
import millify from "millify";
import { Link } from 'react-router-dom';
import {Cryptocurrencies, News} from "./index";
import {makeLinkTo, Paths} from "../config/routes";
import Loader from "./layouts/Loader";

type Props = {};

const Homepage = (props: Props) => {
  const {data: fetchedCryptos, isFetching} = useGetCryptosQuery({});
  const [stats, setStats] = useState<Pick<Stats, 'total' | 'totalMarketCap' | 'totalExchanges' | 'totalMarkets' | 'total24hVolume'>>({
    totalMarketCap: 0,
    total: 0,
    totalMarkets: 0,
    total24hVolume: 0,
    totalExchanges: 0
  });

  useEffect(() => {
    if (fetchedCryptos?.data?.stats) {
      setStats({
        ...fetchedCryptos.data.stats
      })
    }
  }, [fetchedCryptos])

  if (isFetching) return <Loader/>;

  return (
    <>
      <Typography.Title level={2} className="heading">
        Global Crypto Stats
      </Typography.Title>
      <Row>
        <Col span={12}><Statistic key="tc" title="Total Cryptocurrencies" value={stats.total}/></Col>
        <Col span={12}><Statistic key="te" title="Total Exchanges"
                                  value={millify(stats.totalExchanges)}/></Col>
        <Col span={12}><Statistic key="tm" title="Total Market Cap" value={millify(stats.totalMarketCap)}/></Col>
        <Col span={12}><Statistic key="tv" title="Total 24h Volume" value={millify(stats.total24hVolume)}/></Col>
        <Col span={12}><Statistic key="t2" title="Total markets" value={millify(stats.totalMarkets)}/></Col>
      </Row>
      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">Top 10 Cryptocurrencies in world</Typography.Title>
        <Typography.Title level={3} className="show-more"><Link to={makeLinkTo(Paths.Cryptocurrencies)}>Show More</Link> </Typography.Title>
      </div>
      <Cryptocurrencies simplified/>
      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">Latest Crypto News</Typography.Title>
        <Typography.Title level={3} className="show-more"><Link to={makeLinkTo(Paths.News)}>Show More</Link> </Typography.Title>
      </div>
      <News simplified/>

    </>
  );
};

export default Homepage