import React from "react";
import './Tile.scss';
import {useHistory} from "react-router-dom";

function Tile(props: any) {
    const {alt, subject, picture, onClick} = props;

    return (
        <div className='tile' onClick={onClick}>
            <div className='icon'>
                <img alt={alt} src={picture}/>
            </div>
            <div className='subject'>
                <h2>{subject}</h2>
            </div>
        </div>

    );
}


export default Tile;

