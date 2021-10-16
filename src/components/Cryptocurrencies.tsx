import React, {useEffect, useState} from 'react';
import {Coin, useGetCryptosQuery} from "../services/cryptoApi";
import {Card, Col, Input, Row} from "antd";
import {Link} from 'react-router-dom';
import millify from "millify";
import {makeLinkTo, Paths} from "../config/routes";

type Props = {
  simplified?: boolean
};

const Cryptocurrencies = ({simplified = false}: Props) => {
  const count = simplified ? 10 : 100;
  const {data: fetchData, isFetching} = useGetCryptosQuery({count});
  const [cryptos, setCryptos] = useState<Coin[]>();
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    const filteredData = fetchData?.data?.coins.filter(({name}) => name.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase()))
    setCryptos(filteredData);

  }, [fetchData, searchWord]);

  if (isFetching || !cryptos) return <div>"Loading ..."</div>;

  const handleSearchWord = (e: React.FormEvent<HTMLInputElement>) => setSearchWord(e.currentTarget.value);

  return (
    <>
      {
        !simplified &&
        <div className="search-crypto">
					<Input placeholder="Search Cryptocurrency" onChange={handleSearchWord}/>
				</div>
      }
      <Row gutter={[32, 32]} className='crypto-card-container'>
        {
          cryptos.map((coin, index) => (
            <Col xs={24} sm={12} lg={6} className='crypto-card' key={coin.id + index.toString()}>
              <Link to={makeLinkTo(Paths.CryptoDetails, coin.id.toString())}>
                <Card title={`${coin.rank}. ${coin.name}`}
                      hoverable
                      extra={<img className='crypto-image' src={coin.iconUrl} alt={coin.name}/>}>
                  <p>Price: {millify(Number(coin.price))}</p>
                  <p>Market Cap: {millify(Number(coin.marketCap))}</p>
                  <p>Daily Change: {millify(Number(coin.change))}%</p>
                </Card>
              </Link>
            </Col>
          ))
        }
      </Row>
    </>
  );
};

export default Cryptocurrencies