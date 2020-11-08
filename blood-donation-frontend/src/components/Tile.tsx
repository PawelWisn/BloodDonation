import React from "react";
import './Tile.scss';


function Tile(props: any) {
    const {alt, subject, picture} = props;

    return (
        <div className='tile'>
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

