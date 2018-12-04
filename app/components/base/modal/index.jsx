import Modal from "./modal";
import Alert from "./alert";
import ActionSheet from "./actionsheet";
import Dialog from "./dialog";
import Select from "./select";
import "./style/index.less"; 

Modal.alert = Alert;
Modal.actionsheet = ActionSheet;
Modal.dialog = Dialog;
Modal.select = Select;

export default Modal;
