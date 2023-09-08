import React from 'react'
import styles from '../styles/modal.module.css' // Stiller için ayrı bir CSS dosyası oluşturabilirsiniz.

function Modal({ isOpen, onConfirm, onCancel }) {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <p className={styles.title}>Are you sure ?</p>
                <div className={styles.btnContainer}>
                    <button className={styles.yes} onClick={onConfirm}>Yes</button>
                    <button className={styles.no} onClick={onCancel}>No</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
