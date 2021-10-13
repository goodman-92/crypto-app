import React from 'react';
import {Select, Typography} from "antd";
import {useGetNewsQuery} from "../services/newsApi";

type Props = {
  simplified?: boolean
};

const {Title, Text} = Typography;
const {Option} = Select;

const News = ({simplified = false}: Props) => {
  const {data: fetchedNews, isFetching} = useGetNewsQuery({newsCategory: 'Cryptocurrency', count: simplified ? 10 : 100});


  return (
    <div>
      News
    </div>
  );
};

export default News