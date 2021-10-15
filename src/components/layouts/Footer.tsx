import React from 'react';
import {Space, Typography} from "antd";
import {Link} from "react-router-dom";
import {makeLinkTo, Paths} from "../../config/routes";

const Footer = () => {
  return (
    <div className="footer">
      <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
        Cryptoverse <br/>
        All rights reserved
      </Typography.Title>
      <Space>
        <Link to={makeLinkTo(Paths.HomePage)}>Home</Link>
        <Link to={makeLinkTo(Paths.Exchanges)}>Exchange</Link>
        <Link to={makeLinkTo(Paths.News)}>News</Link>
      </Space>
    </div>
  );
};

export default Footer