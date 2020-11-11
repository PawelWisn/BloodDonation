import React, {useState} from "react";
import './PopupButton.scss';
import classNames from 'classnames';


type PopupButtonType = {
    message: string,
    popupMessage: string
}

function PopupButton(props: PopupButtonType) {
    const [popupHidden, setPopupHidden] = useState(true);
    const {message, popupMessage} = props;

    return (
        <div className='popup-container'>
            <div className='popup-button' onClick={handleOnClick}>
                <button>{message}</button>
            </div>

            <div className={classNames('modal', {'hidden': popupHidden})}>
                <div className="modal-content">
                    <div className='absolute-parent'>
                        <span className="close" onClick={handleOnClick}>&times;</span>
                        <p>{popupMessage}</p>
                    </div>
                </div>

            </div>
        </div>
    );

    function handleOnClick() {
        setPopupHidden(!popupHidden)
    }
}


export default PopupButton;

