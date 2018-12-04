import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Tappable from "react-tappable";
import Flex from "../flex";
import PureRenderHOC from "../../util/hoc";
import "./style/index.less";

const prefixCls = "ryt-grids";
const FlexItem = Flex.Item;

const NGrids = props => {
  let { row, column, onTap, border, data, className, ...others } = props;

  const cls = classNames({
    [prefixCls]: true,
    [`${prefixCls}-no-border`]: !border,
    [className]: !!className
  });

  const clientWidth = document.documentElement.clientWidth;
  const itemStyle = {
    height: Math.ceil(clientWidth / 4)
  };

  let FlexNum = 0;
  let needCarousel = false;

  if (row) {
    const sum = row * column;
    needCarousel = sum < data.length;
    FlexNum = needCarousel ? row : Math.ceil(data.length / column);
  } else {
    FlexNum = Math.ceil(data.length / column);
  }

  const tapHandle = function() {
    const args = [].slice.call(arguments);
    return () => onTap && onTap.apply(onTap, args);
  };

  let content = [];
  const pages = Math.ceil(data.length / (FlexNum * column));
  for (let k = 0; k < pages; k++) {
    let pageContent = [];
    for (let i = 0; i < FlexNum; i++) {
      let flexContent = [];
      for (let j = 0; j < column; j++) {
        let index = k * FlexNum * column + i * column + j;
        if (index < data.length) {
          const { content, icon, text, iconStyle = {}, textStyle } = data[
            index
          ];
          content
            ? flexContent.push(
                <Tappable
                  // style={itemStyle}
                  key={`flexItem-${index}`}
                  className={`${prefixCls}-item`}
                  component={FlexItem}
                  onTap={tapHandle(data[index], index)}
                >
                  {content}
                </Tappable>
              )
            : flexContent.push(
                <Tappable
                  // style={itemStyle}
                  key={`flexItem-${index}`}
                  className={`${prefixCls}-item`}
                  component={FlexItem}
                  onTap={tapHandle(data[index], index)}
                >
                    {React.isValidElement(icon) ? (
                      icon
                    ) : (
                      <div
                        className={`${prefixCls}-item-icon`}
                        style={Object.assign(iconStyle, {
                          backgroundImage: `url(${icon})`
                        })}
                      />
                    )}
                 
                    {React.isValidElement(text) ? (
                      text
                    ) : (
                      <div
                        className={`${prefixCls}-item-text`}
                        style={textStyle}
                      >
                        {text}
                      </div>
                    )}
                </Tappable>
              );
        } else {
          flexContent.push(
            <Tappable
              // style={itemStyle}
              key={`flexItem-${index}`}
              className={`${prefixCls}-item`}
              component={FlexItem}
              onTap={tapHandle({}, index)}
            />
          );
        }
      }
      pageContent.push(
        <Flex className={`${prefixCls}-flex`} key={`flex-${i}`}>
          {flexContent}
        </Flex>
      );
    }
    content.push(
      pages > 1 ? <div key={`page-${k}`}>{pageContent}</div> : pageContent
    );
  }

  return (
    <div {...others} className={cls} component="div">
      {content}
    </div>
  );
};

NGrids.propTypes = {
  row: PropTypes.number,
  column: PropTypes.number,
  onTap: PropTypes.func,
  border: PropTypes.bool,
  data: PropTypes.array
};

NGrids.defaultProps = {
  column: 4,
  border: true
};

export default PureRenderHOC(NGrids);
