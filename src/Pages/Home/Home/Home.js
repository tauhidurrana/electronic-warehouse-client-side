import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Items from '../../../Items/Items';
import Banner from '../../Banner/Banner';
import upcoming from '../../../Images/upcoming.jpg'
import logo1 from '../../../Images/L/l-1.png';
import logo2 from '../../../Images/L/l-2.png';
import logo3 from '../../../Images/L/l-3.png';
import './Home.css'

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Banner></Banner>
            <Items></Items>

            <div>
                <Button onClick={() => navigate('/manageitems')} className='inventory-btn success mx-auto mb-5 d-block'>Manage Inventory</Button>
            </div>
            <div className='container upcoming'>
                <h1 className='text-center text-success'>Our upcoming inventory</h1>
                <img className='w-100 mb-5 mx-auto' src={upcoming} alt="" />
            </div>

            <div>
                <h1 className='container award-header'> Achievements</h1>
            </div>
            <div className='achievement container'>
                <div>
                    <img src={logo1} alt="" />
                </div>
                <div>
                    <img src={logo2} alt="" />
                </div>
                <div>
                    <img src={logo3} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Home;