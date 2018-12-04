import PureRenderHoc from "../../util/hoc";
import SwitchItem from "./switch";
import SwitchList from "./switch-list";
import "./style/index.less";
import "../cell/style/index.less";

let Switch = SwitchItem;
Switch.SwitchList = SwitchList;

export default PureRenderHoc(Switch);
