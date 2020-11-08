import UpperBar from './UpperBar';
import BottomBar from "./BottomBar";
import React from "react";
import LegalRegArticle from "./LegalRegArticle";
import './Common.scss';
import './LegalReg.scss';
import {useHistory} from "react-router-dom";


function LegalReg() {

    const history = useHistory();

    function tileOnclick(url: string) {
        history.push(url);
    }

    return (
        <div className="main-page-content">
            <UpperBar/>
            <div className='subpage-title'>
                <h1>Legal Regulations</h1>
                <h2>Sprawdz ktore prawo radzi oddawniem krwi</h2>
            </div>

            <div className='legal-regulations-container'>
                <ul>
                    <li><LegalRegArticle id='xD' date='16-05-2020' name='krwdwa' link='https://stackoverflow.com/questions/62863535/npm-run-build-index-html-creates-blank-page-without-errors-warnings'/></li>
                    <li><LegalRegArticle id='xD' date='16-05-2020' name='krwdwa' link='https://stackoverflow.com/questions/62863535/npm-run-build-index-html-creates-blank-page-without-errors-warnings'/></li>
                    <li><LegalRegArticle id='xD' date='16-05-2020' name='krwdwa' link='https://stackoverflow.com/questions/62863535/npm-run-build-index-html-creates-blank-page-without-errors-warnings'/></li>
                    <li><LegalRegArticle id='xD' date='16-05-2020' name='krwdwa' link='https://stackoverflow.com/questions/62863535/npm-run-build-index-html-creates-blank-page-without-errors-warnings'/></li>
                    <li><LegalRegArticle id='xD' date='16-05-2020' name='krwdwa' link='https://stackoverflow.com/questions/62863535/npm-run-build-index-html-creates-blank-page-without-errors-warnings'/></li>
                    <li><LegalRegArticle id='xD' date='16-05-2020' name='krwdwa' link='https://stackoverflow.com/questions/62863535/npm-run-build-index-html-creates-blank-page-without-errors-warnings'/></li>
                    <li><LegalRegArticle id='xD' date='16-05-2020' name='krwdwa' link='https://stackoverflow.com/questions/62863535/npm-run-build-index-html-creates-blank-page-without-errors-warnings'/></li>
                    <li><LegalRegArticle id='xD' date='16-05-2020' name='krwdwaddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd' link='https://stackoverflow.com/questions/62863535/npm-run-build-index-html-creates-blank-page-without-errors-warnings'/></li>
                </ul>
            </div>

            <BottomBar/>
        </div>
    );

}


export default LegalReg
