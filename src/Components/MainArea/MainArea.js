import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../../data/data.json';
import PlayerArea from '../PlayerArea/PlayerArea';
import SelectionArea from '../SelectionArea/SelectionArea';

const MainArea = () => {

    const [players, setplayers] = useState([]);
    const [newPlayers, setnewPlayers] = useState([]);

    useEffect(() => {
        setplayers(data);
    }, [])

    const handleSelect = (selectedPlayer) => {
        const newPlayersAdded = [...newPlayers, selectedPlayer];
        if (newPlayers.includes(selectedPlayer) === false) {
            setnewPlayers(newPlayersAdded);
        } else {
            alert('This player is already added');
        }
    }

    return (
        <div className='d-flex'>
            <PlayerArea players={players} handleSelect={handleSelect}></PlayerArea>
            <SelectionArea newPlayers={newPlayers}></SelectionArea>
        </div>
    );
};

export default MainArea;