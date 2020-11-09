import React from 'react';
import './BottomBar.scss';
import PopupButton from './PopupButton';

function BottomBar() {

    return (
        <div className='bottom-bar flex-container-bottom-bar'>
            <div className='bottom-item'>
                <p>Copyright &copy; 2020 BloodDonation</p>
            </div>
            <div className='bottom-item'>
                <PopupButton message='Support Us'
                             popupMessage={"Our website was created for the noble idea of saving human health and life, and not for profit, therefore we do not display any advertisements. If you want to help us maintain our website, we encourage you to support us in the form of a voluntary donation to our bank account: 14 1140 2004 0000 3202 7599 4501"}/>
            </div>
            <div className='bottom-item'>
                <a href="mailto:blooddonation@yahoo.com">Send Feedback</a>
            </div>
        </div>
    );
}

export default BottomBar;
