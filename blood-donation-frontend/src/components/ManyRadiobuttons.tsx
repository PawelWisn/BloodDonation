import React, {useState} from "react";
import './ManyRadiobuttons.scss';
import CustomRadiobutton from "./CustomRadiobutton";

type ManyRadiobuttonsType = {
    name: string,
    labels: any,
    values: any,
    ids: any
}

function ManyRadiobuttons(props: ManyRadiobuttonsType) {
    const [picked, setPicked] = useState(0);

    function getRadiobuttons(props: ManyRadiobuttonsType) {
        const {name, labels, values, ids} = props;
        let table = []
        for (let i = 0; i < labels.length; ++i) {

            table.push(
                <CustomRadiobutton key={i} name={name} labelMessage={labels[i]} value={values[i]} id={ids[i]}
                                   handleOnClick={() => changePicked(i)}
                                   colorPicked={picked === i}/>
            );
        }
        return table;


    }

    function changePicked(pickedI: number) {
        if (pickedI === picked) {
            setPicked(-1);
        } else {
            setPicked(pickedI);
        }
    }

    return (
        <div className='radio-flex-container'>
            {getRadiobuttons(props)}
        </div>

    );
}


export default ManyRadiobuttons;

