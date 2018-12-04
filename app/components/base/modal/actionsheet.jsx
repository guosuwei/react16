import React from "react";
import ReactDom from "react-dom";
import Tappable from "react-tappable";
import Modal from "./modal";

/**
 * options {
 *  items:[],
 *  cancelIndex:number,
 *  titleText:string,
 * }
 *
 */

const ActionSheet = (...args) => {
  const options = args[0];
  const callback = args[1];
  if (typeof options === "function" || !options.items) return;

  let div = document.createElement("div");
  div.id = "divModal";
  document.body.appendChild(div);

  const actionSheetWrapCls = "ryt-modal-action-sheet-wrap";

  const close = () => {
    let div =document.getElementById("divModal")
    ReactDom.unmountComponentAtNode(div);
    div.parentNode.removeChild(div);
  };

  const tapHandle = index => () => {
    close();
    if (callback && typeof callback === "function") {
      callback(index);
    }
  };

  const content = options => {
    let { items, cancelIndex, titleText } = options;
    return (
      <div className="ryt-modal-btn-group-vertical">
        {titleText ? (
          <button className="ryt-modal-btn">{titleText}</button>
        ) : null}
        {items.map((item, index) => {
          if (index === cancelIndex) return null;
          return (
            <Tappable
              key={`action-sheet-btn-${index}`}
              className="ryt-modal-btn"
              onTap={tapHandle(index)}
              component="button"
              preventDefault
            >
              {item}
            </Tappable>
          );
        })}
        {cancelIndex ? (
          <div className="ryt-ui-1px-t" style={{ height: 8 }} />
        ) : null}
        {cancelIndex ? (
          <Tappable
            key="action-sheet-btn-cancel"
            className="ryt-modal-btn ryt-modal-action-sheet-cancel"
            onTap={tapHandle(cancelIndex)}
            component="button"
            preventDefault
          >
            {items[cancelIndex]}
          </Tappable>
        ) : null}
      </div>
    );
  };

  ReactDom.render(
    <Modal
      visible
      type="action-sheet"
      wrapClassName={actionSheetWrapCls}
      footer={content(options)}
      transitionName="fadeInUp"
      maskTransitionName="fadeIn"
    />,
    document.getElementById("divModal")
  );
};

export default ActionSheet;
