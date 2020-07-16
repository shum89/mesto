import React from "react";

class PopupWithForm extends React.Component {

    render() {
        return (
            <div className={`popup popup_type_${this.props.name} ${this.props.isOpen ? 'popup_opened' : ''}`}>
                    <div className="popup__container">
                        <h2 className="popup__title">{this.props.title}</h2>
                        <button className="popup__button-close" onClick={this.props.onClose} type="button"/>
                        <form className="popup__form" name={this.props.name}>
                            {this.props.children}
                            <button className="popup__button-submit popup__button-submit_action" type="submit">{this.props.buttonTitle}</button>
                        </form>
                    </div>
                    <div className="popup__overlay" onClick={this.props.onClose}/>
                </div>
        )
        }

}
export default PopupWithForm