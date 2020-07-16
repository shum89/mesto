import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import './index.css';
import PopupWithForm from "./components/PopupWithForm";
import ImagePopup from "./components/ImagePopup";

function App() {
    // cтейты попапов

const [isEditProfileOpen, setEditProfilePopup] = React.useState(false);
const [isAddPlacePopupOpen, setAddPlacePopup] = React.useState(false);
const [isEditAvatarPopupOpen, setEditAvatarPopup] = React.useState(false);
const [selectedCard, setSelectedCardPopup] = React.useState('');

    // хендлеры попапов

function handleCardClick(card) {
    setSelectedCardPopup(card)
}

  function handleEditAvatarClick ()  {
     setEditAvatarPopup(!isEditProfileOpen);
  }

 function handleEditProfileClick  ()  {
    setEditProfilePopup(!isAddPlacePopupOpen);
  }

   function handleAddPlaceClick ()  {
    setAddPlacePopup(!isEditAvatarPopupOpen);
  }

    // закрытие попапов

  function closeAllPopups () {
      setAddPlacePopup(false);
      setEditAvatarPopup(false);
      setEditProfilePopup(false);
      setSelectedCardPopup('');
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
