import React, { memo } from 'react';
import {Col, Typography} from "antd";
import millify from "millify";
import {DollarCircleOutlined, NumberOutlined, ThunderboltOutlined, TrophyOutlined} from "@ant-design/icons";
import {CoinDetail} from "../../../services/cryptoApi";

type Props = {
  coinDetails: CoinDetail
};

const {Title, Text} = Typography;


const StatsArticle = ({coinDetails}: Props) => {

  const stats: { title: string, value: string, icon: any }[] = [
    {
      title: 'Price to USD',
      value: `$ ${coinDetails.price && millify(+coinDetails.price)}`,
      icon: <DollarCircleOutlined/>
    },
    {title: 'Rank', value: coinDetails.rank.toString(), icon: <NumberOutlined/>},
    {
      title: '24h Volume',
      value: `$ ${coinDetails.volume && millify(coinDetails.volume)}`,
      icon: <ThunderboltOutlined/>
    },
    {
      title: 'Market Cap',
      value: `$ ${coinDetails.marketCap && millify(coinDetails.marketCap)}`,
      icon: <DollarCircleOutlined/>
    },
    {title: 'All-time-high(daily avg.)', value: `$ ${millify(coinDetails.allTimeHigh.price)}`, icon: <TrophyOutlined/>},
  ];

  return (
    <Col className="coin-value-statistics">
      <Col className="coin-value-statistics-heading">
        <Title level={3} className="coin-details-heading">
          {coinDetails.name} Value Statistics
        </Title>
        <p>
          An overview showing the stats of
        </p>
      </Col>
      {
        stats.map(({icon, title, value}) => (
          <Col key={title} className="coin-stats">
            <Col className="coin-stats-name">
              <Text>{icon}</Text>
              <Text>{title}</Text>
            </Col>
            <Text className="stats">{value}</Text>
          </Col>
        ))
      }
    </Col>
  );
};

export default memo(StatsArticle)