import PureRenderHoc from "../../util/hoc";
import Btn from "./button";
import Group from "./buttonGroup";
import "./style/index.less";

let Button = PureRenderHoc(Btn);
Button.Group = PureRenderHoc(Group);

export default Button;