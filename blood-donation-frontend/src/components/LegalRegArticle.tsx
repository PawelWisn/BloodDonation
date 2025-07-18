import React from "react";
import "../styles/Common.scss";
import "../styles/LegalRegArticle.scss";

type LegalRegArticleType = {
	art: string;
	date: string;
	name: string;
	link: string;
};

function LegalRegArticle(props: LegalRegArticleType) {
	const { art, date, name, link } = props;
	return (
		<div className="article-element">
			<h4>{name}</h4>
			<h4>Valid since: {date}</h4>
			<a className="article-link" target="_blank" rel="noreferrer" href={link}>
				{art}
			</a>
		</div>
	);
}

export default LegalRegArticle;
