import { useEffect, useState } from 'react'
import './Friend.css'
import Friend from './Friend';


export default function Friends() {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(respons => respons.json())
            .then(data => setFriends(data))
    },[])

    return (
        <div className="box">
            <h3>Friends : {friends.length}</h3>
            {
                friends.map(friendData => <Friend friend={friendData}></Friend> )
            }
            
        </div>
    )
}