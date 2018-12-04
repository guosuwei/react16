import cell from './cell';
import group from './group'
import PureRenderHoc from '../../util/hoc';
import './style/index.less';

let Cell = PureRenderHoc(cell);
Cell.Group = PureRenderHoc(group);

export default Cell;