import React, {useState} from "react";
import './CustomRadiobutton.scss';
import classNames from "classnames";
import CustomRadiobutton from "./CustomRadiobutton";

function ManyRadiobuttons(props: any) {
    const [colorPicked, setColorPicked] = useState(false)


    function getRadiobuttons(props:any) {
        const {name, labels, values, ids} = props;
        let table = []
        for (let i = 0; i < labels.length; ++i) {
            table.push(
                <CustomRadiobutton name={name} labelMessage={labels[i]} value={values[i]} id={ids[i]} />
            );
        }
        return table;

    }

    return (
        <div className='flex-container'>
            {getRadiobuttons(props)}
        </div>

    );
}


export default ManyRadiobuttons;

