import React from "react";
import PropTypes from "prop-types";
import PureRenderHoc from "../../util/hoc";

import Cell from "../cell/cell";
import SwitchItem from "./switch";

const SwitchList = props => {
  const { switchProps, discription, onTap, ...others } = props;

  return <Cell {...others} description={<SwitchItem {...switchProps} />} />;
};

//switchProps参考SwitchItem的props, 其余的参考Cell
SwitchList.propTypes = {
  switchProps: PropTypes.object
};

export default PureRenderHoc(SwitchList);
