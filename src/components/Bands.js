import React from 'react';

const Bands = props => {
  const renderBands = props.bands.map((band, i) => {
    return <li key={i}>{band.name}</li>;
  });

  return (
    <ul>
      {renderBands}
    </ul>
  );

};

export default Bands;