import React from "react";
import PropTypes from "prop-types";
import PureRenderHOC from "../../util/hoc";

import Cell from "../cell/cell";
import RadioItem from "./radio";

const RadioList = props => {
  const { radioProps, description, onTap, ...others } = props;

  const id = Math.random()
    .toString(36)
    .substr(2);

  const _onChange = radioProps.onChange || function() {};

  const onChange = (chekced, event) => {
    _onChange(chekced, event);
    onTap && onTap(chekced, event);
  };
  radioProps.onChange = onChange;

  return (
    <Cell
      {...others}
      radio={<RadioItem {...radioProps} id={id} />}
      htmlFor={id}
    />
  );
};
RadioList.propTypes = {
  radioProps: PropTypes.object
};

RadioList.defaultProps = {
  radioProps: {}
};

export default PureRenderHOC(RadioList);
