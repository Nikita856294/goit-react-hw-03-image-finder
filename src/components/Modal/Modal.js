import react, { Component } from 'react';
import { createPortal } from 'react-dom';
import { OverlayModal, ModalWindow } from './ModalStyled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.toggleModal();
    }
  };

  render() {
    return createPortal(
      <OverlayModal className="overlay">
        <ModalWindow className="modal">{this.props.children}</ModalWindow>
      </OverlayModal>,
      modalRoot
    );
  }
}
export default Modal;
