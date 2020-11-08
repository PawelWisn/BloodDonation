import React from "react";
import './Common.scss';
import './LegalRegArticle.scss';

function LegalRegArticle(props: any) {
    const {id, date, name, link} = props;
    return (
        <div>
            <h4>{id}</h4>
            <h4>{date}</h4>
            <a className='article-name' target='_blank' href={link}>{name}</a>
        </div>
    );

}


export default LegalRegArticle
