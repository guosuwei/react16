import React from 'react';
import classNames from 'classnames';
import PureRenderHOC from "../../util/hoc";

import CheckboxItem from './checkbox';

const prefixCls = 'ryt-agree';

const Agree = (props) => {
  const {
    children,
    className,
    ...others
  } = props;

  const cls = classNames({
    [prefixCls]: true,
    [className]: className
  });

  return (
    <div className={cls}>
      <CheckboxItem {...others}/>
      <span className="ryt-agree-text" htmlFor="">
        {children}
      </span>
    </div>
  );

};


export default PureRenderHOC(Agree);