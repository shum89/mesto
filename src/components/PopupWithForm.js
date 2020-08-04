import React from "react";

/**
 * popup with form component
 * @property {Object} props
 * @property {string} props.buttonTitle - title of the submit button
 * @property {string} name - name for a popup class type
 * @property {string} title - title for a popup
 * @property {function} onClose - handler for closing popup
 * @property {Boolean} isOpen - popup state
 */
function PopupWithForm({buttonTitle, children, name, title,
                           onClose, isOpen, onSubmit, isDisabled,
                           renderSubmitAnimation}){


    return (
        <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : null}`}>
            <div className="popup__container">
                <h2 className="popup__title">{title}</h2>
                <button className="popup__button-close" onClick={onClose} type="button"/>
                <form className="popup__form" name={name} onSubmit={onSubmit}>
                    {children}
                    <button className={`popup__button-submit popup__button-submit_action 
                    ${renderSubmitAnimation ? 'popup__button-submit_loading' : null}
                    ${isDisabled ? null : 'popup__button-submit_disabled'}`
                    }
                            type="submit">{buttonTitle}</button>
                </form>
            </div>
            <div className="popup__overlay" onClick={onClose}/>
        </div>
    )
}

export default PopupWithForm