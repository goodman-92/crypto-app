import React, {useCallback} from 'react';
import {Col, Row, Typography} from "antd";

type Props = {
  coinHistory: any
  currentPrice: string
  coinName: string
};

const LineChart = ({coinName, coinHistory, currentPrice}: Props) => {
  //
  // const {coinPrice, coinTimestamp} = makeFormatData(coinHistory.data)
  //

  return (
    <>
      <Row className="chart-header">
        <Typography.Title level={5} className="chart-title">
          {coinName} Price Chart
        </Typography.Title>
        <Col className="price-container">
          <Typography.Title level={5} className="price-change">{coinHistory?.data?.change}%</Typography.Title>
          <Typography.Title level={5} className="current-price">Current {coinName} Price: ${currentPrice}</Typography.Title>
        </Col>
      </Row>
    </>
  )
}


export default LineChart