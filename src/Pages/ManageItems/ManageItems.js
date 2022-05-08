import React, { useEffect, useState } from 'react';
import Item from '../../Item/Item';
import ManageItemsAll from '../ManageItemsAll/ManageItemsAll';

const ManageItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    return (
        <div id='items' className='container'>
            <h1 className='text-primay text-center mt-5 mb-5'>Inventory Items</h1>
            <div className='items-container'>
                <div className='grid grid-cols-2'>
                    {
                        items.map(item => <ManageItemsAll
                            key={item._id}
                            item={item}
                        ></ManageItemsAll>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageItems;