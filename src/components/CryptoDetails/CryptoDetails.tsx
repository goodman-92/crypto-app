import React, {useState} from 'react';
import {Col, Row, Select, Typography,} from "antd";
import {useParams} from "react-router-dom";
import {useGetCryptoHistoryQuery, useGetCryptosDetailsQuery} from "../../services/cryptoApi";
import millify from "millify";
import StatsArticle from "./partial/StatsArticle";
import OtherArticle from "./partial/OtherArticle";
import HTMLReactParser from "html-react-parser";
import LineChart from "../LineChart";

type Props = {};
const {Title} = Typography;
type Time = '3h' | '24h' | '7d' | '30d' | '1y' | '3m' | '3y' | '5y'


const CryptoDetails = (props: Props) => {
  const {coinId} = useParams<{ coinId: string | undefined }>();
  const [timePeriod, setTimePeriod] = useState<Time>('7d');

  const {isFetching, data: fetchedCoin} = useGetCryptosDetailsQuery({coinId})
  const {isFetching: isFetchingHistory, data: coinHistory} = useGetCryptoHistoryQuery({coinId, timePeriod})
  const coinDetails = fetchedCoin?.data?.coin;

  if (isFetching || !fetchedCoin || !coinDetails) return <div>Loading</div>

  const time: Time[] = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const handleTimePeriod = (time: Time) => setTimePeriod(time);

  return (
    <Col className='coin-detail-container'>
      <Col className='coin-heading-container'>
        <Title level={2} className='coin-name'>
          {coinDetails.name} ({coinDetails.slug}) Price
        </Title>
        <p>
          {coinDetails.name} live price in US dollars
          View value static sticks, market cap and supply.
        </p>
      </Col>
      <Select
        defaultValue="7d" className="select-timeperiod" placeholder="Select Time Period"
        onChange={handleTimePeriod}
      >
        {time.map((date) => (<Select.Option key={date} value={date}>{date}</Select.Option>))}
      </Select>
      <LineChart coinHistory={coinHistory} currentPrice={millify(+coinDetails.price)} coinName={coinDetails.name}/>
      <Col className="stats-container">
        <StatsArticle coinDetails={coinDetails}/>
        <OtherArticle coinDetails={coinDetails}/>
      </Col>
      <Col className="coin-desc-link">
        <Row className="coin-desc">
          <Title level={2} className="coin-details-heading">
            What is {coinDetails.name}
          </Title>
          {HTMLReactParser(coinDetails.description)}
        </Row>
        <Col className="coin-links">
          <Title level={3} className="coin-details-heading">
            {coinDetails.name} Links
          </Title>
          {
            coinDetails.links.map(({type, url, name}) => (
              <Row className="coin-link" key={name}>
                <Title level={5} className="link-name">
                  {type}
                </Title>
                <a href={url} target="_blank" rel="noreferrer">
                  {name}
                </a>
              </Row>
            ))
          }
        </Col>
      </Col>
    </Col>
  )
    ;
};

export default CryptoDetails