import React from 'react';
import {Col, Row, Typography} from "antd";
import {CoinHistory} from "../services/cryptoApi";
import {Line} from "react-chartjs-2";
import * as Chart from "chart.js";
import dayjs from "dayjs";

type Props = {
  coinHistory: {
    history: CoinHistory[],
    change: number
  }
  currentPrice: string
  coinName: string
};

const LineChart = ({coinName, coinHistory, currentPrice}: Props) => {
  const coinPrice: number[] = [];
  const coinTimeStamp: string[] = [];

  coinHistory.history.forEach(({timestamp, price}) => {
    coinPrice.push(parseInt(price, 10))
    coinTimeStamp.push(dayjs(timestamp).format('YY/MM/DD'))
  })

  const data: Chart.ChartData = {
    labels: coinTimeStamp,
    datasets: [{
      label: 'Price in USD',
      data: coinPrice,
      fill: false,
      backgroundColor: '#0071bd',
      borderColor: '#0071bd'
    }]
  };

  const options: Chart.ChartOptions = {
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }

  return (
    <>
      <Row className="chart-header">
        <Typography.Title level={5} className="chart-title">
          {coinName} Price Chart
        </Typography.Title>
        <Col className="price-container">
          <Typography.Title level={5} className="price-change">{coinHistory.change}%</Typography.Title>
          <Typography.Title level={5} className="current-price">Current {coinName} Price:
            ${currentPrice}</Typography.Title>
        </Col>
        <Line data={data} options={options}/>
      </Row>
    </>
  )
}


export default LineChart