import React from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import '../index.css';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ConfirmDeletePopup from "./ConfirmDeletePopup";
import Spinner from "./Spinner";
import Page404 from "./Page404";
import {api} from "../utils/Api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

/**
 * Create an app from the components
 * @returns {JSX.Element} - HTML-markup
 */
function App() {
    /**
     * Current User State
     */
    const [currentUser, setUserInfo] = React.useState({
        name:'',
        avatar:'',
        about:'',
        _id:'',
    });
    /**
     * Cards state
     */
    const [cards, setCards] = React.useState([]);

/**
State for waiting while loading data
 */
const [isSubmitting, setSubmiting] = React.useState(false);
const [isLoading, setLoading] = React.useState(false);

    /**
     * Popup with form states
     */
    const [isEditProfileOpen, setEditProfilePopup] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopup] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopup] = React.useState(false);
    const [isDeletePopupOpen, setDeletePopup] = React.useState(false);

    /**
     * Popup with image state
     */
    const [selectedCard, setSelectedCardPopup] = React.useState(undefined);
    const [selectedDeleteCard, setSelectedCard] = React.useState(undefined);


    /**
     * Set current user values and initial cards
     */
    React.useEffect( () => {
        setLoading(true)
        Promise.all([api.getUserInfo(), api.getInitialCards()]).then(([userData, initialCards]) => {
            setUserInfo(userData);
            setCards(initialCards);
            setLoading(false);
        }).catch((err) => {
        console.log(err);
        })
    }, [])


    /**
     *  handles user click on a card
     * @param {Object} card - card object that corresponds to a card that user clicked on
     */
    const handleCardClick = card => {
        setSelectedCardPopup(card);
    };
    /**
     * handles user click on avatar
     */
    const handleEditAvatarClick = () => {
       setEditAvatarPopup(true);
    };
    /**
     * handles user click on profile edit button
     */
    const handleEditProfileClick = () => {
    setEditProfilePopup(true);
  };

    /**
     * handles user click on add place button
     */
    const handleAddPlaceClick = () => {
    setAddPlacePopup(true);
  };

  const handleDeletePopupClick = (card) => {
        setDeletePopup(true);
        setSelectedCard(card);
    }

   /**
    * closes all popups
    */

  const closeAllPopups  = () => {
      setAddPlacePopup(false);
      setEditAvatarPopup(false);
      setEditProfilePopup(false);
      setSelectedCardPopup(undefined);
      setDeletePopup(false)
  }

    /**
     * update user info
     * @param data {object}
     */

  const handleUpdateUser = (data) => {
      setSubmiting(true);
      api.updateUserInfo(data).then((result) => {
          setUserInfo(result);
          closeAllPopups();
          setSubmiting(false);
      }).catch((err) => {
          console.log(err)
      })
    }

    /**
     * update user avatar
     * @param data {object}
     */

    const handleUpdateAvatar = (data) => {
        setSubmiting(true);
      api.updateUserAvatar(data).then((result) => {
          setUserInfo(result);
          closeAllPopups();
          setSubmiting(false);
      }).catch((err) => {
          console.log(err)
      })
    }

    /**
     * handle card likes
     * @param card {object}
     */
    const handleCardLike = (card) => {
        const isLiked = card.likes.some((i) => i._id === currentUser._id);
        api.setLike(card._id, isLiked).then((newCard) => {
            const newCards = cards.map((c) => {
                return c._id === card._id ? newCard : c;
            });
            setCards(newCards);
        }).catch((err) => {
            console.log(err)
        })
    };

    /**
     * handle card delete
     * @param card {object}
     */

    const handleDeleteCard = (card) => {
        setSubmiting(true);
        api.deleteCard(card._id).then(() => {
            const newCards = cards.filter(i => i._id !== card._id);
            setCards(newCards);
            closeAllPopups();
            setSubmiting(false);
        }).catch((err) => {
            console.log(err);
        })
    }

    /**
     * handle add card
     * @param data {object}
     */
    const handleAddPlaceSubmit = (data) => {
        setSubmiting(true);
        api.postNewCard(data).then((newCard) => {
            setCards([newCard,...cards]);
            closeAllPopups();
            setSubmiting(false);
        }).catch((err) => {
            console.log(err)
        })
    }


  return (
      <HashRouter>
      <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header/>
        <Switch>
            <Route exact path={'/'}>
          {isLoading ? <Spinner/> : <Main onAddPlace={handleAddPlaceClick}
              onEditProfile={handleEditProfileClick}
              onEditAvatar={handleEditAvatarClick}
              cardClick={handleCardClick}
              cards={cards}
              onCardDelete={handleDeleteCard}
              onCardLike={handleCardLike}
              onDeletePopup={handleDeletePopupClick}
              />}
            </Route>
            <Route path={'*'}>
                <Page404/>
            </Route>
        </Switch>

        <Footer/>

          <ConfirmDeletePopup
              isOpen={isDeletePopupOpen}
              onClose={closeAllPopups}
            onDeleteSubmit={handleDeleteCard}
              card={selectedDeleteCard}
              isSubmitting={isSubmitting}
          />

      <EditProfilePopup isOpen={isEditProfileOpen}
                        onClose={closeAllPopups}
                        onUpdateUser={handleUpdateUser}
                        isSubmitting={isSubmitting}
      />

      <EditAvatarPopup isOpen={isEditAvatarPopupOpen}
                       onClose={closeAllPopups}
                       onUpdateAvatar={handleUpdateAvatar}
                       isSubmitting={isSubmitting}
      />

      <AddPlacePopup isOpen={isAddPlacePopupOpen}
                     onClose={closeAllPopups}
                     onAddPlace={handleAddPlaceSubmit}
                     isSubmitting={isSubmitting}
      />


          <ImagePopup card={selectedCard}
                      onClose={closeAllPopups}/>

      </div>
      </CurrentUserContext.Provider>
      </HashRouter>
  );
}

export default App;
