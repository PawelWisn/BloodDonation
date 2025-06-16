import React from "react";
import "../styles/CustomRadiobutton.scss";
import classNames from "classnames";

type CustomRadiobuttonType = {
	labelMessage: string;
	name: string;
	value: string;
	id: string;
	handleOnClick: any;
	colorPicked: boolean;
};

function CustomRadiobutton(props: CustomRadiobuttonType) {
	const { labelMessage, name, value, id, handleOnClick, colorPicked = false } = props;

	return (
		<div
			className={classNames("radio-flex-item", {
				"color-primary": colorPicked,
				"color-secondary": !colorPicked,
			})}
			onClick={handleOnClick}
		>
			<input type="radio" id={id} name={name} value={value} />
			<label>{labelMessage}</label>
		</div>
	);
}

export default CustomRadiobutton;
