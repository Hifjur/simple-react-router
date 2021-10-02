import React from 'react';
import { Link, useHistory} from 'react-router-dom';

const Friend = (props) => {
    const history = useHistory();
    function detailsHandler(){
        history.push(`/friend/${props.id}`)
    }
    return (
        <div>
            <h1>{props.name}</h1>
            <p>Address: {props.address}</p>
            <Link to={`/friend/${props.id}`}>Visit</Link>
            <button onClick={detailsHandler} style={{
                backgroundColor: "red",
                padding:"10px"
            }}>Click ME!</button>
        </div>
    );
};

export default Friend;