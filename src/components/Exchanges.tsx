import React from 'react';
import {useGetExchangesQuery} from "../services/cryptoApi";
import Loader from "./layouts/Loader";
import {Avatar, Col, Collapse, Row, Typography} from "antd";
import millify from "millify";
import HTMLReactParser from "html-react-parser";

type Props = {};

const Exchanges = (props: Props) => {
  const {data, isFetching} = useGetExchangesQuery({});

  if (isFetching) return <Loader/>

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24H Trad Volume</Col>
        <Col span={6}>Markets</Col>
        <Col span={6}>Change</Col>
      </Row>
      <Row>
        {
          data?.data.exchanges.map((exc) => (
            <Col span={24} key={exc.id}>
              <Collapse>
                <Collapse.Panel
                  key={exc.id}
                  showArrow={false}
                  header={(
                    <Row key={exc.id}>
                      <Col span={6}>
                        <Typography.Text><strong>{exc.rank}</strong></Typography.Text>
                        <Avatar className="exchange-image" src={exc.iconUrl}/>
                        <Typography.Text><strong>{exc.name}</strong></Typography.Text>
                      </Col>
                      <Col span={6}>${millify(exc.volume)}</Col>
                      <Col span={6}>{millify(exc.numberOfMarkets)}</Col>
                      <Col span={6}>{millify(exc.marketShare)}%</Col>
                    </Row>
                  )}
                >
                  {HTMLReactParser(exc.description || '')}
                </Collapse.Panel>
              </Collapse>
            </Col>
          ))
        }
      </Row>
    </>
  );
};

export default Exchanges