import React from 'react';
import PopupWithForm from "./PopupWithForm";

/**
 * modal window for card delete
 * @param {object} props
 * @param {function} props.onClose handles popup close
 * @param {function} props.onUpdateUser handles user info update
 * @param {boolean} props.isSubmitting checks if user submitting to set an animation
 * @param {object} props.card card element
 * @returns {JSX.Element}
 * @constructor
 */

function ConfirmDeletePopup({isOpen, onClose, onDeleteSubmit, card, isSubmitting}) {

    const handleDeleteSubmit = (e) => {
        e.preventDefault();
        onDeleteSubmit(card);
    }

    return (
        <PopupWithForm name={'popup-delete'}
                       title={'Вы уверены?'}
                       buttonTitle={'Да'}
                       isOpen={isOpen}
                       onClose={onClose}
                       onSubmit={handleDeleteSubmit}
                       renderSubmitAnimation={isSubmitting}
                       isDisabled={true}
        />
    );
}

export default ConfirmDeletePopup;