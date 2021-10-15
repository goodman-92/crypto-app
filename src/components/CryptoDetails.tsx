import React, {useState} from 'react';
import {Col, Row, Typography, Select} from "antd";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined
} from "@ant-design/icons";
import {useParams} from "react-router-dom";

type Props = {};
const {Title, Text} = Typography;

const CryptoDetails = (props: Props) => {
  const {id} = useParams<{ id: string | undefined }>();
  const [timePeriod, setTimePeriod] = useState('7D')

  return (
    <div>
      CryptoDetails {id}
    </div>
  );
};

export default CryptoDetails