import React, {useState} from 'react';
import {Avatar, Card, Col, Row, Select, Typography} from "antd";
import {useGetNewsQuery} from "../services/newsApi";
import dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime"
import {useGetCryptosQuery} from "../services/cryptoApi";

dayjs.extend(RelativeTime);

type Props = {
  simplified?: boolean
};

const {Title, Text} = Typography;
const {Option} = Select;

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({simplified = false}: Props) => {
  const {data: fetchedCoins} = useGetCryptosQuery({})

  const [selectedCategory, setSelectedCategory] = useState('Cryptocurrency');
  
  const {data: fetchedNews, isFetching} = useGetNewsQuery({
    newsCategory: selectedCategory,
    count: simplified ? 10 : 100
  });


  if (isFetching || !fetchedNews?.value) return <div>Loading</div>;

  const handleCategory = (value: any) => setSelectedCategory(value);
  
  const handleFilterOption = (input: any, option: any) => {
    return option.children.toLowerCase().indexOf(input.toLowerCase()) > -1
  };

  return (
    <Row gutter={[24, 24]}>
      {
        !simplified && (
          <Col span={24}>
            <Select showSearch
                    className="select-news"
                    placeholder="Select a Crypto"
                    optionFilterProp="children"
                    onChange={handleCategory}
                    filterOption={handleFilterOption}
            >
              {
                fetchedCoins?.data?.coins.map(({name, id}) => {
                  return <Option key={id} value={name} children={name}/>
                })

              }

            </Select>

          </Col>
        )
      }

      {fetchedNews.value.map((news, i) => {
        return (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>{news.name}</Title>
                  <img style={{maxWidth: 200, maxHeight: 200}} src={news?.image?.thumbnail?.contentUrl || demoImage}
                       alt={news.name}/>
                </div>
                <p>
                  {news.description.length > 100 ? news.description.substring(0, 100) + '...' : news.description}
                </p>
                <div className="provider-container">
                  <div>
                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt={news.name}/>
                    <Text className="provider-name">
                      {news.provider[0]?.name}
                    </Text>
                  </div>
                  {dayjs(news.datePublished).startOf('seconds').fromNow()}
                </div>

              </a>
            </Card>
          </Col>
        )
      })}</Row>
  )
    ;
};

export default News