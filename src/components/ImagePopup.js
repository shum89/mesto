import React from "react";

/**
 * popup with image component
 * @property {Object} props
 * @property {Object} props.card - card object
 * @property {string} props.card.name - title of an image
 * @property {string} props.card.link - link for an image
 * @property {function} onClose - handler for closing popup
 */
class ImagePopup extends React.Component {

    render() {
            const {
                card,
                card: {link, name} = {link: '', name: ''},
                onClose,
            } = this.props;

        return (
            <div className={`popup popup_type_image ${card ? 'popup_opened' : ''}`}>
                <figure className="popup__image-container">
                    <button className="popup__button-close" type="button" onClick={onClose}></button>
                    <img className="popup__photo" src={`${link}`} alt={name}/>
                    <figcaption className="popup__caption">{name}</figcaption>
                </figure>
                <div className="popup__overlay popup__overlay_image" onClick={onClose}/>
            </div>
        )
    }

}

export default ImagePopup