import { Button } from 'bootstrap';
import React from 'react';
import './ManageItemsAll.css'
import { useNavigate } from 'react-router-dom';

const ManageItemsAll = (props) => {
    const { _id, name, img, description, price, quantity, supplierName
    } = props.item;
    const navigate = useNavigate()

    const navigateToItemDetail = (id) => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='itemsCard'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
                <p>Price:{price}</p>
                <p>Quantity:{quantity}</p>
                <p>Supplier Name:{supplierName}</p>
            </div>

        </div>
    );
};

export default ManageItemsAll;