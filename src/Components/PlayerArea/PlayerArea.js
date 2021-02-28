import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PlayerArea.css';
import Player from '../Player/Player';

const PlayerArea = (props) => {


    return (
        <div className='w-75 player-area'>
            <h5 className='text-success text-center fw-bold p-3 player-area-header'>SELECT YOUR PLAYERS &#8595;</h5>
            <div className='d-flex flex-wrap justify-content-around align items-center'>
                {
                    props.players.map(player => <Player key={player.id} handleSelect={props.handleSelect} player={player}></Player>)
                }
            </div>
        </div>
    );
};

export default PlayerArea;