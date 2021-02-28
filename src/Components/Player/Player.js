import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Player.css';

const Player = (props) => {
    const { name, country, salary, img } = props.player;
    return (
        <div className='player-card d-flex align-items-center shadow rounded m-2 py-3 px-2'>
            <img className='card-img mx-3' src={img} alt="" />
            <div>
                <h5>{name}</h5>
                <p><b>Country: </b>{country}</p>
                <p><b>Salary: </b>$ {salary}M</p>
                <button className="btn btn-success btn-small px-4" onClick={() => { props.handleSelect(props.player) }
                }><FontAwesomeIcon icon={faPlusCircle} /> Add</button>
            </div>
        </div>
    );
};

export default Player;