// import Button from 'react-bootstrap/Button';
import ModalIcon from '../images/modal-icon.svg';
import Modal from 'react-bootstrap/Modal';
// import { Link } from 'react-router-dom';

function LogOutModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal">
      <h2>Log Out?</h2>
      <object data={ModalIcon}></object>
      <div className="buttons">
        <div>
          {/* eslint-disable-next-line react/prop-types */}
          <button onClick={props.onHide} className="btnNo">
            No
          </button>
        </div>
        <div>
          <button className="btnYes">Yes</button>
        </div>
      </div>
      {/* <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body> */}
    </Modal>
  );
}

export default LogOutModal;