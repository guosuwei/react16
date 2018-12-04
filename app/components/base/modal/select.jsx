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

const Select = (...args) => {
  const options = args[0];
  const callback = args[1];
  if (typeof options === "function" || !options.items) return;

  let div = document.createElement("div");
  div.id = "divModal";
  document.body.appendChild(div);

  const actionSheetWrapCls = "ryt-modal-action-sheet-wrap";

  const close = () => {
    ReactDom.unmountComponentAtNode(div);
    div.id = "divModal";
    div.parentNode.removeChild(div);
  };

  const tapHandle = (index, value, label) => () => {
    close();
    if (callback && typeof callback === "function") {
      callback(index, value, label);
      console.log(index, value, label);
    }
  };

  const content = options => {
    let { items, close, closeText, cancelIndex } = options;
    let list = items.map(function(item, i) {
      return JSON.stringify(item);
    });
    return (
      <div className="ryt-modal-btn-group-vertical">
        <div className="select-box">
          <div className="select-box-list">
            {list.map((item, index) => {
              let itemobj = JSON.parse(item);
              // let cardnumnew = Common.setAccountNum(itemobj.acNo);
              let ontapflag;
              if (itemobj.usable === "0") {
                ontapflag = false;
              } else {
                ontapflag = true;
              }
              let ifchecked = "";
              if (itemobj.now === "1") {
                ifchecked = "current";
              }

              if (index === cancelIndex) {
                return null;
              } else {
                return (
                  <Tappable
                    key={`action-sheet-btn-${index}`}
                    className="mbank-modal-btn"
                    onTap={
                      ontapflag
                        ? tapHandle(index, itemobj.value, itemobj.label)
                        : null
                    }
                  >
                    <div className={ifchecked}>{itemobj.label}</div>
                  </Tappable>
                );
              }
            })}
          </div>
        </div>
        <div className="select-box-close">
          <Tappable key="action-sheet-btn-cancel" className="" onTap={close}>
            {closeText}
          </Tappable>
        </div>

        {cancelIndex ? (
          <div className="mbank-ui-1px-t" style={{ height: 8 }} />
        ) : null}
      </div>
    );
  };

  ReactDom.render(
    <Modal
      visible
      type="action-sheet"
      wrapClassName={actionSheetWrapCls}
      maskTransitionName="mbank-am-fade"
      footer={content(options)}
    />,
    document.getElementById("divModal")
  );
};

export default Select;
