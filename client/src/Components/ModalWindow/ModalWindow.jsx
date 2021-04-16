import React from 'react';
import Modal from 'react-modal';

import './ModalWindow.scss';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '250px',
        zIndex: '9999 !important'
    }
};

const ModalWindow = ({ message, htmlContent, showCloseButton }) => {

    const [modalIsOpen, setIsOpen] = React.useState(true);

    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="modal-main">
            {/* <button onClick={openModal}>Open Modal</button> */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                // style={customStyles}
                contentLabel="Example Modal"
                className="modal"
                ariaHideApp={false}
            >
                {message ? <p className="modal-message">{message}</p> : null}
                {htmlContent()}
                {
                    showCloseButton ?
                        <button onClick={closeModal} className="modal-close-button">Inchide</button>
                        : null
                }
            </Modal>
        </div>
    );
}

export default ModalWindow;