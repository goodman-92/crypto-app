import React, {memo} from 'react';
import {Col, Typography} from "antd";
import millify from "millify";
import {
  CheckOutlined,
  ExclamationCircleOutlined,
  FundOutlined,
  MoneyCollectOutlined,
  StopOutlined
} from "@ant-design/icons";
import {CoinDetail} from "../../../services/cryptoApi";

type Props = {
  coinDetails: CoinDetail
};
const {Title, Text} = Typography;


const OtherArticle = ({coinDetails}: Props) => {
  const genericStats = [
    {title: 'Number Of Markets', value: coinDetails.numberOfMarkets, icon: <FundOutlined/>},
    {title: 'Number Of Exchanges', value: coinDetails.numberOfExchanges, icon: <MoneyCollectOutlined/>},
    {
      title: 'Aprroved Supply',
      value: coinDetails.approvedSupply ? <CheckOutlined/> : <StopOutlined/>,
      icon: <ExclamationCircleOutlined/>
    },
    {title: 'Total Supply', value: `$ ${millify(coinDetails.totalSupply)}`, icon: <ExclamationCircleOutlined/>},
    {
      title: 'Circulating Supply',
      value: `$ ${millify(coinDetails.circulatingSupply)}`,
      icon: <ExclamationCircleOutlined/>
    },
  ];


  return (
    <Col className="other-stats-info">
      <Col className="coin-value-statistics-heading">
        <Title level={3} className="coin-details-heading">
          {coinDetails.name} Value Statistics
        </Title>
        <p>
          An overview showing the stats of all cryptocurrencies
        </p>
      </Col>
      {
        genericStats.map(({icon, title, value}) => (
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

export default memo(OtherArticle)