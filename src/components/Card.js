import React from "react";

/**
 * Card component
 * @property {Object} props
 * @property {Object} props.card - card object
 * @property {string} props.card.name - card title
 * @property {string} props.card.link - card image link
 * @property {Array} props.card.likes - array of likes
 */
class Card extends React.Component {

    /**
     * @method handleCardClick
     * @description handles click on a card
     */
     handleCardClick = () => {
        this.props.onCardClick(this.props.card)
    }

    render() {
        const {card} = this.props;
        return (
            <li className="card">
                <img
                    className="card__photo"
                    alt={card.name}
                    src={card.link}
                    onClick={this.handleCardClick}
                />
                <button className="card__delete-button"></button>
                <div className="card__info-container">
                    <h2 className="card__title">{card.name}</h2>
                    <div className="card__like-container">
                        <button className="card__like" type="button"></button>
                        <p className="card__like-counter">{card.likes.length}</p>
                    </div>
                </div>
            </li>
        )
    }
}

export default Card