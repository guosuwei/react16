import React from 'react';
import classNames from "classnames";
import PureRenderHOC from '../../util/hoc';


const prefixCls = 'ryt-radio';

let Radio = (props) => {
  const {
    disabled,
    name,
    value,
    defaultValue,
    onChange,
    className,
    ...others
  } = props;

  const cls = classNames({
    [prefixCls]: true,
    [`${prefixCls}-disabled`]: disabled,
    [className]: className
  });

  const changeHandle = (e) => {
    let value = e.target.checked;
    onChange && onChange(value, e);
    e.stopPropagation();
  };

  return (
    <input
      {...others}
      type="radio"
      name={name}
      className={cls}
      checked={value}
      defaultChecked={defaultValue}
      onChange={changeHandle}
      {...(disabled ? {disabled: 'true'} : '')}
    />
  );
};


const RadioGroup = (props) => {
  let {
    name,
    className,
    onChange,
    children,
    defaultActiveKey,
    ...others,
  } = props;

  name = name || Math.random().toString(36).substr(2);

  const cls = classNames({
    [`${prefixCls}-group`]: true,
    [className]: className
  });
  

  const memoChangeHandle = (() => {
    let cache;
    return (key) =>  (value,e) => {
      if (cache === 'undefined') {
        cache = key;
        onChange && onChange(key,value, e);
      } else {
        cache !== key && onChange && onChange(key,value, e);
        cache = key;
      }
    }
  })();


  return (
    <div {...others} className={cls}>
      {
        React.Children.map(children,(child,index) => {
          const key = child.key || index.toString();
          const props = {
            key,
            name,
            onChange:memoChangeHandle(key),
            defaultValue: defaultActiveKey === key
          };
          return React.cloneElement(child,props);
        })
      }
    </div>
  );

};

RadioGroup.defaultProps = {
  defaultActiveKey : '0'
};

Radio = PureRenderHOC(Radio);
Radio.Group = PureRenderHOC(RadioGroup);
export default Radio;

