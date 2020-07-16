import React from "react";

class ImagePopup extends React.Component {

    render() {
        return (
            <div className={`popup popup_type_image ${this.props.card ? 'popup_opened' : ''}`}>
                <figure className="popup__image-container">
                    <button className="popup__button-close" type="button" onClick={this.props.onClose}></button>
                    <img className="popup__photo" src={`${this.props.card.link}`} alt={this.props.card.name}/>
                    <figcaption className="popup__caption">{this.props.card.name}</figcaption>
                </figure>
                <div className="popup__overlay popup__overlay_image" onClick={this.props.onClose}/>
            </div>
        )
    }

}

export default ImagePopup