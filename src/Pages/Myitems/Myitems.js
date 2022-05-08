import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Myitems = () => {
    const [items, setItems] = useState([]);
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/myitems?email=${user.email}`)
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    return (
        <div>
            <h2>Name:</h2>
            {
                items.map(item=> <div key={item._id}>{item.name}</div>)
            }
        </div>
    );
};

export default Myitems;