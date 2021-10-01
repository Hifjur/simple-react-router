import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({})
    useEffect(() =>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res => res.json())
        .then(data => setFriend(data));
    },[])
    return (
        <div>
            <h1>Friend Details of {friendId}</h1>
            <h1>{friend.name}</h1>
            <p>{friend.phone}</p>
            <p>{friend.email}</p>
            <p>{friend.website}</p>
            <p>{friend.company?.name}</p>
        </div>
    );
};

export default FriendDetails;