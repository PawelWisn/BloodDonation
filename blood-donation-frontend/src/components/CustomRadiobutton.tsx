import React from "react";
import './CustomRadiobutton.scss';
import classNames from "classnames";

function CustomRadiobutton(props: any) {
    // const [colorPicked, setColorPicked] = useState(false)

    const {labelMessage, name, value, id, handleOnClick, colorPicked = false} = props;

    return (
        <div className={classNames('radio-flex-item', {
            'color-primary': colorPicked,
            'color-secondary': !colorPicked
        })} onClick={handleOnClick}>
            <input type='radio' id={id} name={name} value={value}/>
            <label>{labelMessage}</label>
        </div>

    );
}


export default CustomRadiobutton;

