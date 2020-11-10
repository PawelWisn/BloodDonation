import UpperBar from './UpperBar';
import BottomBar from "./BottomBar";
import React from "react";
import './Common.scss';
import './Quiz.scss';
import ManyRadiobuttonsNoDefault from "./ManyRadiobuttonsNoDefault";
import PopupButton from "./PopupButton";

function Quiz() {

    return (
        <div className="main-page-content">
            <UpperBar/>
            <div className='subpage-title'>
                <h1>Donor Test</h1>
                <h2>Answer to questions and precheck if you are allowed to donate</h2>
            </div>

            <div className='quiz-container'>
                <div className='quiz-question'>
                    <h2>Do you feel healty?</h2>
                    <ManyRadiobuttonsNoDefault name='ans1' labels={['YES', 'NO']} values={['YES', 'NO']}
                                               ids={['q1y', 'q1n']}/>
                </div>
                <div className='quiz-question'>
                    <h2>Do you weight over 50kg?</h2>
                    <ManyRadiobuttonsNoDefault name='ans2' labels={['YES', 'NO']} values={['YES', 'NO']}
                                               ids={['q2y', 'q2n']}/>
                </div>
                <div className='quiz-question'>
                    <h2>Did you get a tatoo recently?</h2>
                    <ManyRadiobuttonsNoDefault name='ans3' labels={['YES', 'NO']} values={['YES', 'NO']}
                                               ids={['q3y', 'q3n']}/>
                </div>
                <div className='quiz-question'>
                    <h2>Does your blood pressure exceed 180/100 mmHg?</h2>
                    <ManyRadiobuttonsNoDefault name='ans4' labels={['YES', 'NO']} values={['YES', 'NO']}
                                               ids={['q4y', 'q4n']}/>
                </div>
                <div className='quiz-question'>
                    <h2>Have you taken any medications in the last 4 weeks (excluding vitamins and contraception)?</h2>
                    <ManyRadiobuttonsNoDefault name='ans5' labels={['YES', 'NO']} values={['YES', 'NO']}
                                               ids={['q5y', 'q5n']}/>
                </div>
                <div className='quiz-question'>
                    <h2>Have you been to the dentist in the last 7 days?</h2>
                    <ManyRadiobuttonsNoDefault name='ans6' labels={['YES', 'NO']} values={['YES', 'NO']}
                                               ids={['q6y', 'q6n']}/>
                </div>
                <div className='quiz-question'>
                    <h2>Do you have diabetes or epilepsy</h2>
                    <ManyRadiobuttonsNoDefault name='ans7' labels={['YES', 'NO']} values={['YES', 'NO']}
                                               ids={['q7y', 'q7n']}/>
                </div>
                <div className='quiz-question'>
                    <h2>Have you had an invasive diagnostic medical examination in the last half of the year?</h2>
                    <ManyRadiobuttonsNoDefault name='ans8' labels={['YES', 'NO']} values={['YES', 'NO']}
                                               ids={['q8y', 'q8n']}/>
                </div>
                <div className='quiz-question'>
                    <h2>Have you been treated with a growth hormone?</h2>
                    <ManyRadiobuttonsNoDefault name='ans9' labels={['YES', 'NO']} values={['YES', 'NO']}
                                               ids={['q9y', 'q9n']}/>
                </div>
                <div className='quiz-question'>
                    <h2>Are you between 18 and 65 years old?</h2>
                    <ManyRadiobuttonsNoDefault name='ans10' labels={['YES', 'NO']} values={['YES', 'NO']}
                                               ids={['q10y', 'q10n']}/>
                </div>
                <div className='quiz-question'>
                    <h2>Have you been exposed to mad cow disease?</h2>
                    <ManyRadiobuttonsNoDefault name='ans11' labels={['YES', 'NO']} values={['YES', 'NO']}
                                               ids={['q11y', 'q11n']}/>
                </div>
                <div className='quiz-question'>
                    <h2>Do you use psychoactive substances?</h2>
                    <ManyRadiobuttonsNoDefault name='ans5' labels={['YES', 'NO']} values={['YES', 'NO']}
                                               ids={['q5y', 'q5n']}/>
                </div>
                <div id='quiz-button'>
                        {/*<input type='button' value='Submit'/>*/}
                        <PopupButton message='Submit' popupMessage='nope'/>
                </div>
            </div>

            <BottomBar/>
        </div>
    );

}


export default Quiz
