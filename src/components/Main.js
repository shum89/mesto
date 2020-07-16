import React from "react";
import {api} from "../utils/Api";
import Card from "./Card";


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userDescription: '',
            userAvatar: '',
            cards: [],
        }
    }

    componentDidMount() {
        Promise.all([api.getUserInfo(),api.getInitialCards()])
            .then(([userData, cards]) => {
                this.setState({
                    userName: userData.name,
                    userDescription: userData.about,
                    userAvatar: userData.avatar,
                    cards: cards,
                })
            }).catch((err) => {
                console.log(err)
        })
    }

    render() {
        return (

            <main className="content">
                <section className="profile">
                    <div className="profile__wrap">
                        <div className="profile__avatar"  onClick={this.props.onEditAvatar}>
                            <img className="profile__avatar-image" alt="Аватар" src={this.state.userAvatar}/>
                        </div>
                        <div className="profile__info">
                            <div className="profile__text-container">
                                <h2 className="profile__title">{this.state.userName}</h2>
                                <button className="profile__edit-button" type="button" onClick={this.props.onEditProfile}/>
                            </div>
                            <p className="profile__subtitle">{this.state.userOccupation}</p>
                        </div>
                    </div>
                    <button className="profile__add-button" type="button" onClick={this.props.onAddPlace}/>
                </section>

                <ul className="cards">
                    {this.state.cards.map((card) =>
                        <Card card={card} key={card._id} onCardClick={this.props.cardClick} />) }
                </ul>

            </main>
        )
    }

}

export default Main