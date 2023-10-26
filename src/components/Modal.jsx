import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: "100%",
        height: "50%"
    },
};

function ModalComponent({ isOpen, toggle, children }) {
    Modal.setAppElement('#modal_root')
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={toggle}
            style={customStyles}
            contentLabel='Example modal'
        >
            {children}
        </Modal>
    )
}

export default ModalComponent

