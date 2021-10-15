import React from 'react';
import {Space, Typography} from "antd";
import {Link} from "react-router-dom";
import {Paths} from "../../config/routes";

const Footer = () => {
  return (
    <div className="footer">
      <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
        Cryptoverse <br/>
        All rights reserved
      </Typography.Title>
      <Space>
        <Link to={Paths.HomPage}>Home</Link>
        <Link to={Paths.Exchanges}>Exchange</Link>
        <Link to={Paths.News}>News</Link>
      </Space>
    </div>
  );
};

export default Footer