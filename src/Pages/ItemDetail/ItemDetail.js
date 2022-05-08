import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
    const { ItemID } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/items/${ItemID}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])
    return (
        <div className='item mb-5'>
            <Card className='' border="light" style={{ width: '22rem', height: '500px' }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body className='d-flex flex-column justify-content-between'>
                    <div>
                        <Card.Title> <h3>{item.name}</h3> </Card.Title>
                        <Card.Text>
                            {item.description}
                            <h3>Price: {item.price}</h3>
                            <p>Detail: full 1 day with Lunch + Breakfast</p>
                        </Card.Text>
                    </div>
                    <Button className='btn-item'  variant="danger" size="lg">
                        Delivered
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ItemDetail;

// onClick={() => navigateToItemDetail(_id)}