import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SelectedPlayer = (props) => {
    const { name, salary } = props.newPlayer;
    return (
        <div className='mx-3 my-2 p-3 bg-primary text-white shadow text-center rounded'>
            <h5>{name}</h5>
            <h6><b>Salary: </b>$ {salary}M</h6>
        </div>
    );
};

export default SelectedPlayer;