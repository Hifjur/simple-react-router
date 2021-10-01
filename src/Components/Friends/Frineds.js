import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Frineds = () => {
    const [frineds,setFriends] = useState([])
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then (data => setFriends(data));
    },[])
    return (
        <div>
            {
                frineds.map(friend => <Friend
                    key={friend.id} name={friend.name} address={friend.address.street} id={friend.id}></Friend>)
            }
        </div>
    );
};

export default Frineds;