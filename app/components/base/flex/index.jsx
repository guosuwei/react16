import flex from "./flex";
import item from "./item";
import PureRenderHoc from "../../util/hoc";
import "./style/index.less";

let Flex = PureRenderHoc(flex);
Flex.Item = PureRenderHoc(item);

export default Flex;
