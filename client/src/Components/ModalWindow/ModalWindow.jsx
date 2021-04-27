import React from 'react';
import Modal from 'react-modal';

import './ModalWindow.scss';


const ModalWindow = ({ message, htmlContent, showCloseButton,customStyles }) => {

    const [modalIsOpen, setIsOpen] = React.useState(true);

    // function openModal() {
    //     setIsOpen(true);
    // }


    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="modal-main">
            {/* <button onClick={openModal}>Open Modal</button> */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles ? customStyles : "" }
                contentLabel="Example Modal"
                className="modal-window"
                ariaHideApp={false}
            >
                {message ? <p className="modal-message">{message}</p> : null}
                {htmlContent ? htmlContent() : null}
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