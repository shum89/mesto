import React from "react";

class Card extends React.Component {

    // хэндлер клика на карточку
     handleCardClick = () => {
        this.props.onCardClick(this.props.card)
    }

    render() {
        return (
            <li className="card">
                <img
                    className="card__photo"
                    alt={this.props.card.name}
                    src={this.props.card.link}
                    onClick={this.handleCardClick}
                />
                <button className="card__delete-button"></button>
                <div className="card__info-container">
                    <h2 className="card__title">{this.props.card.name}</h2>
                    <div className="card__like-container">
                        <button className="card__like" type="button"></button>
                        <p className="card__like-counter">{this.props.card.likes.length}</p>
                    </div>
                </div>
            </li>
        )
    }
}

export default Card