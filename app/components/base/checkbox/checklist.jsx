import React from "react";
import PropTypes from "prop-types";
import PureRenderHOC from "../../util/hoc";
import Cell from "../cell/cell";
import CheckboxItem from "./checkbox";

const CheckboxList = props => {
  let { checkboxProps, thumb, onTap, ...others } = props;

  const id = Math.random()
    .toString(36)
    .substr(2);

  const _onChange = checkboxProps.onChange || function() {};

  const onChange = (chekced, event) => {
    _onChange(chekced, event);
    onTap && onTap(chekced, event);
  };

  checkboxProps.onChange = onChange;

  return (
    <Cell
      {...others}
      checkbox={<CheckboxItem {...checkboxProps} id={id} />}
      htmlFor={id}
    />
  );
};
CheckboxList.propTypes = {
  checkboxProps: PropTypes.object
};

CheckboxList.defaultProps = {
  checkboxProps: {}
};

export default PureRenderHOC(CheckboxList);
