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
class PopupWithForm extends React.Component {

    render() {
        const {buttonTitle, onClose, children, name, title, isOpen} = this.props;
        return (
            <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
                    <div className="popup__container">
                        <h2 className="popup__title">{title}</h2>
                        <button className="popup__button-close" onClick={onClose} type="button"/>
                        <form className="popup__form" name={name}>
                            {children}
                            <button className="popup__button-submit popup__button-submit_action" type="submit">{buttonTitle}</button>
                        </form>
                    </div>
                    <div className="popup__overlay" onClick={onClose}/>
                </div>
        )
        }

}
export default PopupWithForm