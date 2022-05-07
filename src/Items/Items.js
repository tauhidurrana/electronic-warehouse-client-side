import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css';

const Items = () => {
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);

    return (
        <div id='items' className='container'>
        <h1 className='text-primay text-center mt-5 mb-5'>Our Services</h1>
        <div className='items-container'>
        
            {
                items.map(item => <Item
                key={item._id}
                item={item}
                ></Item>)
            }
        </div>
    </div>
    );
};

export default Items;

// key={service.id}
// service={service}