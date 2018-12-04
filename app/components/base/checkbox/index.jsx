import CheckboxItem from "./checkbox";
import Agree from "./agree";
import CheckboxList from "./checklist";
import PureRenderHoc from "../../util/hoc";
import "./style/index.less";

let Checkbox = PureRenderHoc(CheckboxItem);
Checkbox.Agree = PureRenderHoc(Agree);
Checkbox.CheckboxList = PureRenderHoc(CheckboxList);

export default Checkbox;
