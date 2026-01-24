import React from 'react';

const OldPrice = ({ children }) => {
  return <del style={{ color: "#999", marginRight: "10px" }}>{children}</del>;
};

export default OldPrice;