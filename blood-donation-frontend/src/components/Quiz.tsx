import UpperBar from './UpperBar';
import BottomBar from "./BottomBar";
import React from "react";
import './Common.scss';
import './Quiz.scss';
import ManyRadiobuttonsNoDefault from "./ManyRadiobuttonsNoDefault";

function Quiz() {

    return (
        <div className="main-page-content">
            <UpperBar/>
            <div className='subpage-title'>
                <h1>Donor Test</h1>
                <h2>Answer to questions and precheck if you are allowed to donate</h2>
            </div>

            <div className='quiz-container'>
                <ManyRadiobuttonsNoDefault name='ans1' labels={['YES', 'NO', '??', '!!']}
                                           values={['YES', 'NO', '??', '!!']} ids={['q1y', 'q1n', 'q1m', 'q1e']}/>
            </div>

            <BottomBar/>
        </div>
    );

}


export default Quiz
