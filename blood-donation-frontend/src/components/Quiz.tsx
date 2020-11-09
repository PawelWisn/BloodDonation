import UpperBar from './UpperBar';
import BottomBar from "./BottomBar";
import React from "react";
import './Common.scss';
import './Quiz.scss';
import ManyRadiobuttons from "./ManyRadiobuttons";
function Quiz() {


    return (
        <div className="main-page-content">
            <UpperBar/>
            <div className='subpage-title'>
                <h1>Donor Test</h1>
                <h2>Answer to questions and precheck if you are allowed to donate</h2>
            </div>

            <div className='quiz-container'>
                <ManyRadiobuttons name='ans1' values={['YES', 'NO', '??']} labels={['YES', 'NO', '??']} ids={['q1y','q1n','q1m']} />
            </div>

            <BottomBar/>
        </div>
    );

}


export default Quiz
