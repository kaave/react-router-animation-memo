import React from 'react';
import Modal from 'react-modal';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const style = {
  overlay: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  content: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
};

export default function ModalRouteChange ({ status }) {
  return (
    <Modal
      isOpen={['enter', 'exit'].includes(status)}
      style={style}
      contentLabel="Modal Route Change"
      className="modal-route-change"
      overlayClassName={{
        base: 'modal-route-change-overlay',
        afterOpen: 'modal-route-change-overlay--after-open',
        beforeClose: 'modal-route-change-overlay--before-close',
      }}
      closeTimeoutMS={600}
    >
      <div className="route-change-wrapper__inner">
        <h2 className="route-change-wrapper__header">
          遷移中 / Moving to next
        </h2>
      </div>
    </Modal>
  );
}
