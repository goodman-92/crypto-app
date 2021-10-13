import React from 'react';

type Props = {
  simplified?: boolean
};

const Cryptocurrencies = ({ simplified = false}: Props) => {
  return (
    <div>
      Cryptocurrencies page
    </div>
  );
};

export default Cryptocurrencies