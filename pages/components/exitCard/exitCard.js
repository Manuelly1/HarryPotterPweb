import styles from '../../styles/Modal.module.css';

var opened = false
function open_close_modal() {
    opened = !opened
    document.getElementById("modal").style.visibility = opened ? "visible" : "hidden"
}