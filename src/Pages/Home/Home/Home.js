import React from 'react';
import { Button } from 'react-bootstrap';
import Items from '../../../Items/Items';
import Banner from '../../Banner/Banner';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            
            <div>
            <Button className='inventory-btn success mx-auto mb-5 d-block'>Manage Inventory</Button>
            </div>
            
        </div>
    );
};

export default Home;