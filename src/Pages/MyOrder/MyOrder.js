import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const MyOrder = () => {
    const [myorder, setMyOrder] = useState([])
    const [DeleteItem, setDeleteItem] = useState('')
    const email = 'sejan7090@gmail.com';
    useEffect(() => {
        fetch(`http://localhost:9000/orders/${email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data))
    }, [DeleteItem])


    const handlerToDelete = id => {
        const proceed = window.confirm('Are You sure to delete');
        if (proceed) {
            axios.delete(`http://localhost:9000/orders/${email}/${id}`)
                .then(function (response) {
                    if (response.data.deletedCount) {
                        alert('deleted successfully')
                        setDeleteItem(response.data.deletedCount);
                    }
                })
        }
    }
    return (
        <div>
            {myorder.map(order =>
                <ul>
                    <img style={{ width: '300px' }} src={order?.img} alt="" />
                    <li>{order?.name}</li>
                    <li>{order?.desc}</li>
                    <li>{order?.status}</li>
                    <button onClick={() => handlerToDelete(order?._id)}>delete</button>
                </ul>
            )}
        </div>
    );
};

export default MyOrder;