import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>Address: {props.address}</p>
            <Link to={`/friend/${props.id}`}>Visit</Link>
        </div>
    );
};

export default Friend;