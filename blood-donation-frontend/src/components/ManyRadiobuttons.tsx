import React, {useState} from "react";
import './ManyRadiobuttons.scss';
import classNames from "classnames";
import CustomRadiobutton from "./CustomRadiobutton";

function ManyRadiobuttons(props: any) {
    const [picked, setPicked] = useState(0)


    function getRadiobuttons(props: any) {
        const {name, labels, values, ids} = props;
        let table = []
        for (let i = 0; i < labels.length; ++i) {
            if (i === picked) {
                table.push(<CustomRadiobutton name={name} labelMessage={labels[0]} value={values[0]} id={ids[0]}
                                              colorPicked={true}/>);
            } else {
                table.push(
                    <CustomRadiobutton name={name} labelMessage={labels[i]} value={values[i]} id={ids[i]}/>
                );
            }
        }
        return table;
    }

    function changePicked(){

    }

    return (
        <div className='radio-flex-container'>
            {getRadiobuttons(props)}
        </div>

    );
}


export default ManyRadiobuttons;

