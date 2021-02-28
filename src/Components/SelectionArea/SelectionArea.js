import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedPlayer from '../SelectedPlayer/SelectedPlayer';

const SelectionArea = (props) => {
    const newPlayers = props.newPlayers;

    const totalSalary = newPlayers.reduce((total, newPlayerSalary) => total + Math.round(newPlayerSalary.salary), 0);

    return (
        <div className='w-25 py-3'>
            <h4 className='text-primary px-3'>Players added: {newPlayers.length}</h4>
            <h4 className='text-primary pb-3 px-3'>Total budget: $ {totalSalary}M</h4>
            {
                newPlayers.map((newPlayer, i) => <SelectedPlayer key={i} newPlayer={newPlayer}></SelectedPlayer>)
            }
        </div>
    );
};

export default SelectionArea;