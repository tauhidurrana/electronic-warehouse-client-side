import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Items from '../../../Items/Items';
import Banner from '../../Banner/Banner';
import './Home.css'

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            
            <div>
            <Button onClick={ () => navigate('/manageitems')} className='inventory-btn success mx-auto mb-5 d-block'>Manage Inventory</Button>
            </div>
            <div>
                <h1>Our upcoming inventory</h1>
                <img src="" alt="" />
            </div>
            
        </div>
    );
};

export default Home;