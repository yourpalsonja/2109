"use client";

import { createPortal } from "react-dom";
import Button from "../Button/Button";
import styles from "@/components/Modal/Modal.module.css";

function Modal({ onClose, children }) {
    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = (
        <div className={styles.overlay}>
            <div className={styles.wrapper}>
                <div className={styles.modal}>
                    <header className={styles.header}>
                        <Button
                            value='Close me'
                            onClick={handleCloseClick}
                        />
                    </header>
                    {children}
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
}

export default Modal;
