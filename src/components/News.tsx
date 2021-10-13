import React from 'react';

type Props = {
  simplified?: boolean
};

const News = ({simplified = false}: Props) => {
  return (
    <div>
      News
    </div>
  );
};

export default News