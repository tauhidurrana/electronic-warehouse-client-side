import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
    const { ItemID } = useParams();
    const [item, setItem] = useState({});


    useEffect(() => {
        const url = `https://salty-stream-70664.herokuapp.com/items/${ItemID}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [item]);



    const handleAddStock = event => {
        
        event.preventDefault();
        const stockInput = parseInt(event.target.stock.value);
        const newStock = item.quantity + stockInput;
        const data = {quantity: newStock};

        const url = `https://salty-stream-70664.herokuapp.com/item/update/${ItemID}`;
        fetch(url, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
        })
    }

    let decreasedQty = item.quantity;
    const handleDelivered = () => {
        decreasedQty = decreasedQty - 1;
        const data = {quantity: decreasedQty};

        const url = `https://salty-stream-70664.herokuapp.com/item/update/${ItemID}`;
        fetch(url, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
        })

    }

    return (
        <div className='item mb-5'>
            <Card className='mx-auto' border="light" style={{ width: '24rem', height: '500px' }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body className='d-flex flex-column justify-content-between'>
                    <div>
                        <Card.Title> <h3>{item.name}</h3> </Card.Title>
                        <Card.Text>
                            {item.description}
                            <h3>Price: {item.price}</h3>
                            <p>Quantity: {item.quantity}</p>
                        </Card.Text>
                    </div>
                    <Button onClick={handleDelivered} className='btn-item' variant="danger" size="lg">
                        Delivered
                    </Button>
                </Card.Body>
                <div>
                    <form onSubmit={handleAddStock}>
                        <input type="number" name="stock" id="" />
                        <button>Add Stock</button>
                    </form>
                </div>
            </Card>

        </div>
    );
};

export default ItemDetail;

// onClick={() => navigateToItemDetail(_id)}