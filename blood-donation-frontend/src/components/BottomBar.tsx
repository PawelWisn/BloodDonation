import React from 'react';
import './BottomBar.scss';

function BottomBar() {
    return (
        <div className='bottom-bar flex-container-bottom-bar'>
            <div className='bottom-item'><p>Copyright &copy; BloodDonation</p></div>
            <div className='bottom-item'><button>Support Us</button></div>
            <div className='bottom-item'><a href="mailto:blooddonation@yahoo.com">Send Feedback</a></div>
        </div>
    );
}

export default BottomBar;
