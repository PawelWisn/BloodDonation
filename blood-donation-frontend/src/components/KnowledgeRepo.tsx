import UpperBar from './UpperBar';
import BottomBar from "./BottomBar";
import React from "react";
import './Common.scss';
import './KnowledgeRepo.scss';


function KnowledgeRepo() {


    return (
        <div className="main-page-content">
            <UpperBar/>
            <div className='subpage-title'>
                <h1>Knowledge Repository</h1>
                <h2></h2>
            </div>

            <div className="knowledge-container">
                <div className='popup-button knowledge-item'>
                    <button>What is blood and what is its meaning?</button>
                </div>
                <div className='popup-button knowledge-item'>
                    <button>What is blood and what is its meaning?</button>
                </div>
                <div className='popup-button knowledge-item'>
                    <button>What is blood and what is its meaning?</button>
                </div>
                <div className='popup-button knowledge-item'>
                    <button>What is blood and what is its meaning?</button>
                </div>
                <div className='popup-button knowledge-item'>
                    <button>What is blood and what is its meaning?</button>
                </div>
                <div className='popup-button knowledge-item'>
                    <button>What is blood and what is its meaning?</button>
                </div>
                <div className='popup-button knowledge-item'>
                    <button>What is blood and what is its meaning?</button>
                </div>
                <div className='popup-button knowledge-item'>
                    <button>What is blood and what is its meaning?</button>
                </div>
                <div className='popup-button knowledge-item'>
                    <button>What is blood and what is its meaning?</button>
                </div>
                <div className='popup-button knowledge-item'>
                    <button>What is blood and what is its meaning?</button>
                </div>

            </div>

            <BottomBar/>
        </div>
    );

}


export default KnowledgeRepo
