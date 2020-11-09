import React from "react";
import './Common.scss';
import './LegalRegArticle.scss';

function LegalRegArticle(props: any) {
    const {art, date, name, link} = props;
    return (
        <div className='article-element'>
            <h4>{name}</h4>
            <h4>Valid from: {date}</h4>
            <a className='article-link' target='_blank' href={link}>{art}</a>
        </div>
    );

}


export default LegalRegArticle
