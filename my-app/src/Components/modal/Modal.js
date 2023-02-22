import React from "react";
import s from "./modal.module.css";


function Modal({isActive, setActive}) {

    console.log(isActive)
    return (
        <div className={"${s.modal} ${isActive && s.active}"} onClick={() => setActive(false)}>
            <div className={"${s.modalContent} ${isActive && s.active}"} onClick={e => e.stopPropagation()}>
                <h1>Всплывающее окно</h1>
            </div>
        </div>
    )
}

export default Modal