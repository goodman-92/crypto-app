import React from 'react';
import {Spin} from "antd";

type Props = {
  
};

const Loader = (props: Props) => {
  return (
    <div className="loader">
      <Spin/>
    </div>
  );
};

export default Loader