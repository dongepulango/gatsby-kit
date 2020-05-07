import React from "react";
//context
import Context from 'components/utils/context';

const wrapRootElement = ({ element }) => {
  return (
    <Context>{element}</Context>
  );
};

export { wrapRootElement };