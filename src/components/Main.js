import React from "react";
import {api} from "../utils/Api";
import Card from "./Card";




/**
 * @class Main
 * @classdesc renders content such as profile and cards sections
 * @property {function} props.onEditAvatar - handles click on avatar and opens edit avatar popup
 * @property {function} props.onEditProfile - handles click on profile button and opens edit profile popup
 * @property {function} props.onAddPlace - handles click on addPlace button and opens add place popup
 * @property {function} props.cardClick - handles click on card image and opens image popup
 * @property {Object} state
 * @property {string} state.userName - user name
 * @property {string} state.userDescription - user occupation
 * @property {string} state.userAvatar - link to an user avatar image
 * @property {Array} state.cards - array of cards objects
 */
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

    /** @method componentDidMount
     * @description - handles Promise.All that gets user info and initial cards
     */
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
        const {cardClick, onAddPlace, onEditProfile, onEditAvatar} = this.props;
        const {userName, userAvatar, cards, userDescription} = this.state;
        return (

            <main className="content">
                <section className="profile">
                    <div className="profile__wrap">
                        <div className="profile__avatar"  onClick={onEditAvatar}>
                            <img className="profile__avatar-image" alt="Аватар" src={userAvatar}/>
                        </div>
                        <div className="profile__info">
                            <div className="profile__text-container">
                                <h2 className="profile__title">{userName}</h2>
                                <button className="profile__edit-button" type="button" onClick={onEditProfile}/>
                            </div>
                            <p className="profile__subtitle">{userDescription}</p>
                        </div>
                    </div>
                    <button className="profile__add-button" type="button" onClick={onAddPlace}/>
                </section>

                <ul className="cards">
                    {cards.map((card) =>
                        <Card card={card} key={card._id} onCardClick={cardClick} />) }
                </ul>

            </main>
        )
    }

}

export default Main