import React from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import '../index.css';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

/**
 * Create an app from the components
 * @returns {string} - HTML-markup
 * @constructor
 */
function App() {
   /**
    * Popup with form states
    */
    const [isEditProfileOpen, setEditProfilePopup] = React.useState(false);
const [isAddPlacePopupOpen, setAddPlacePopup] = React.useState(false);
const [isEditAvatarPopupOpen, setEditAvatarPopup] = React.useState(false);

    /**
     * Popup with image state
     */
    const [selectedCard, setSelectedCardPopup] = React.useState(undefined);

/**
 *  handles user click on a card
 * @param {Object} card - card object that corresponds to a card that user clicked on
 */

function handleCardClick(card) {
    setSelectedCardPopup(card)
}
/**
 * handles user click on avatar
 */
  function handleEditAvatarClick ()  {
     setEditAvatarPopup(true);
  }
    /**
     * handles user click on profile edit button
     */
    function handleEditProfileClick  ()  {
    setEditProfilePopup(true);
  }

    /**
     * handles user click on add place button
     */
    function handleAddPlaceClick ()  {
    setAddPlacePopup(true);
  }

   /**
    * closes all popups
    */

  function closeAllPopups () {
      setAddPlacePopup(false);
      setEditAvatarPopup(false);
      setEditProfilePopup(false);
      setSelectedCardPopup(undefined);
  }

  return (
      <div className="page">
        <Header/>
        <Main onAddPlace={handleAddPlaceClick}
              onEditProfile={handleEditProfileClick}
              onEditAvatar={handleEditAvatarClick}
              cardClick={handleCardClick} />
        <Footer/>
          <PopupWithForm name={'popup-delete'} title={'Вы уверены?'} buttonTitle={'Да'} isOpen={false} ></PopupWithForm>

          <PopupWithForm name={'edit-avatar'} title={'Обновить Аватар'} buttonTitle={'Сохранить'} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
              <label className="popup__form-label">
                  <input className="popup__input" id="input-title" name="avatar" type="url" placeholder="Ссылка на картинку"
                         required/>
                  <span className="popup__input-error" id="input-title-error"></span>
              </label>
          </PopupWithForm>

          <PopupWithForm name={'edit-profile'} title={'Редактировать Профиль'} buttonTitle={'Cохранить'} isOpen={isEditProfileOpen} onClose={closeAllPopups}>
              <label className="popup__form-label">*/}
                  <input className="popup__input" id="input-title" name="name" type="text" placeholder="ФИО" minLength="2"
                         maxLength="20" pattern="[a-zA-ZА-ЯЁа-яё\s\-]+" required/>
                  <span className="popup__input-error" id="input-title-error"> </span>
              </label>
              <label className="popup__form-label">
                  <input className="popup__input" id="input-subtitle" name="occupation" type="text" placeholder="Профессия"
                         minLength="2" maxLength="200" pattern="^[^\s\-].+[^\s']$" required/>
                  <span className="popup__input-error" id="input-subtitle-error"> </span>
              </label>
          </PopupWithForm>

          <PopupWithForm name={'add-card'} title={'Новое Место'} buttonTitle={'Создать'} isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
              <label className="popup__form-label">
                  <input className="popup__input" id="input-title" name="name" type="text" placeholder="Название" minLength="1"
                         maxLength="30" required/>
                  <span className="popup__input-error" id="input-title-error"></span>
              </label>
              <label className="popup__form-label">
                  <input className="popup__input" id="input-subtitle" name="link" type="url" placeholder="Ссылка на картинку"
                         required/>
                  <span className="popup__input-error" id="input-subtitle-error"></span>
              </label>
          </PopupWithForm>

          <ImagePopup card={selectedCard} onClose={closeAllPopups}/>


      </div>
  );
}

export default App;
