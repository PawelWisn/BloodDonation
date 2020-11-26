import React from "react";
import '../styles/Tile.scss';

type TileType = {
    alt: string,
    subject: string,
    picture: any,
    onClick: any
}

function Tile(props: TileType) {
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

