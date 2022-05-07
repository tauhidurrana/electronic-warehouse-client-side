import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Item = (props) => {
    const { id, name, img, description, price } = props.item;
    const navigate = useNavigate()

    const navigateToServiceDetail = (id) => {
        navigate(`/item/${id}`)
    }
    return (
        <div className='item mb-5'>
        <Card className='' border="light" style={{ width: '22rem', height: '500px' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body className='d-flex flex-column justify-content-between'>
                <div>
                    <Card.Title> <h3>{name}</h3> </Card.Title>
                    <Card.Text>
                        {description}
                        <h3>Price: {price}</h3>
                        <p>Detail: full 1 day with Lunch + Breakfast</p>
                    </Card.Text>
                </div>
                <Button className='btn-item' onClick={() => navigateToServiceDetail(id)} variant="danger" size="lg">
                    Book Now
                </Button>
            </Card.Body>
        </Card>
    </div>
    );
};

export default Item;