import React from 'react';
import './col.css';

const Col = ({ span, col, sm, md, lg, className, children }) => {
  const handleWidth = () => {
    switch (span) {
      case 1:
        return '8';
      case 2:
        return '16.6666666667%';
      case 3:
        return '25%';
      case 4:
        return '33.3333333333%';
      case 5:
        return '41.6666666667%';
      case 6:
        return '50%';
      case 7:
        return '58.3333333333%';
      case 8:
        return '66.6666666667%';
      case 9:
        return '75%';
      case 10:
        return '83.3333333333%';
      case 11:
        return '91.6666666667%';
      case 12:
        return '100%';
    }
  };
  return (
    <div
      className={`col-${col} ${sm && 'col-sm-' + sm} ${md && 'col-md-' + md} ${
        sm && 'col-lg-' + lg
      }`}
    >
      {children}
    </div>
  );
};
//col-sm
export default Col;
