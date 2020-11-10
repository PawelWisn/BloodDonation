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
                <div className='quiz-question' id='question1'>
                    <h2>Do you feel healty?</h2>
                    <ManyRadiobuttonsNoDefault name='ans1' labels={['YES', 'NO']} values={['1', '0']}
                                               ids={['q1y', 'q1n']}/>
                </div>
                <div className='quiz-question' id='question2'>
                    <h2>Do you weight over 50kg?</h2>
                    <ManyRadiobuttonsNoDefault name='ans2' labels={['YES', 'NO']} values={['1', '0']}
                                               ids={['q2y', 'q2n']}/>
                </div>
                <div className='quiz-question' id='question3'>
                    <h2>Did you get a tatoo recently?</h2>
                    <ManyRadiobuttonsNoDefault name='ans3' labels={['YES', 'NO']} values={['0', '1']}
                                               ids={['q3y', 'q3n']}/>
                </div>
                <div className='quiz-question' id='question4'>
                    <h2>Does your blood pressure exceed 180/100 mmHg?</h2>
                    <ManyRadiobuttonsNoDefault name='ans4' labels={['YES', 'NO']} values={['0', '1']}
                                               ids={['q4y', 'q4n']}/>
                </div>
                <div className='quiz-question' id='question5'>
                    <h2>Have you taken any medications in the last 4 weeks (excluding vitamins and contraception)?</h2>
                    <ManyRadiobuttonsNoDefault name='ans5' labels={['YES', 'NO']} values={['0', '1']}
                                               ids={['q5y', 'q5n']}/>
                </div>
                <div className='quiz-question' id='question6'>
                    <h2>Have you been to the dentist in the last 7 days?</h2>
                    <ManyRadiobuttonsNoDefault name='ans6' labels={['YES', 'NO']} values={['0', '1']}
                                               ids={['q6y', 'q6n']}/>
                </div>
                <div className='quiz-question' id='question7'>
                    <h2>Do you have diabetes or epilepsy</h2>
                    <ManyRadiobuttonsNoDefault name='ans7' labels={['YES', 'NO']} values={['0', '1']}
                                               ids={['q7y', 'q7n']}/>
                </div>
                <div className='quiz-question' id='question8'>
                    <h2>Have you had an invasive diagnostic medical examination in the last half of the year?</h2>
                    <ManyRadiobuttonsNoDefault name='ans8' labels={['YES', 'NO']} values={['0', '1']}
                                               ids={['q8y', 'q8n']}/>
                </div>
                <div className='quiz-question' id='question9'>
                    <h2>Have you been treated with a growth hormone?</h2>
                    <ManyRadiobuttonsNoDefault name='ans9' labels={['YES', 'NO']} values={['0', '1']}
                                               ids={['q9y', 'q9n']}/>
                </div>
                <div className='quiz-question' id='question10'>
                    <h2>Are you between 18 and 65 years old?</h2>
                    <ManyRadiobuttonsNoDefault name='ans10' labels={['YES', 'NO']} values={['1', '0']}
                                               ids={['q10y', 'q10n']}/>
                </div>
                <div className='quiz-question' id='question11'>
                    <h2>Have you been exposed to mad cow disease?</h2>
                    <ManyRadiobuttonsNoDefault name='ans11' labels={['YES', 'NO']} values={['0', '1']}
                                               ids={['q11y', 'q11n']}/>
                </div>
                <div className='quiz-question' id='question12'>
                    <h2>Do you use psychoactive substances?</h2>
                    <ManyRadiobuttonsNoDefault name='ans5' labels={['YES', 'NO']} values={['0', '1']}
                                               ids={['q5y', 'q5n']}/>
                </div>
                <div id='quiz-button' onClick={handleQuizButtonClick}>
                    <PopupButton message='Submit' popupMessage='nope'/>
                </div>
            </div>

            <BottomBar/>
        </div>
    );

    function updateModalText(text: string) {
        let modalText = document.getElementsByClassName('absolute-parent')[0].getElementsByTagName('p')[0];
        modalText.innerHTML = text;
    }

    function handleQuizButtonClick() {
        let questions = document.getElementsByClassName('color-primary');
        if (questions.length < 12) {
            updateModalText("Your did not answer to all questions!");
            return;
        } else {
            for (let i = 0; i < 12; ++i) {
                let radio = questions[i].getElementsByTagName('input')[0];
                if (radio) {
                    if (radio['value'] === '0') {
                        updateModalText("Unfortunately, you are not allowed to donate");
                        return;
                    }
                }
            }
            updateModalText("Congratulations, you are allowed to donate!");
        }
    }
}


export default Quiz
