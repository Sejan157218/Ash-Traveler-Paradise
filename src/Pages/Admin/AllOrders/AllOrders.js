import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modifiedCount, setModifiedCount] = useState('');
    const [deleteItem, setDeleteItem] = useState('');
    const [addrtype, setAddrType] = useState('')

    useEffect(() => {
        console.log('loaded');
        fetch('http://localhost:9000/orders')
            .then(res => res.json())
            .then(data => {
                setAllOrders(data);
                setModifiedCount('');
                setLoading(false);
            })

    }, [modifiedCount, deleteItem]);

    const handlerToDelete = id => {
        const proceed = window.confirm('Are You sure to delete');
        if (proceed) {
            axios.delete(`http://localhost:9000/orders/${id}`)
                .then(function (response) {
                    if (response.data.deletedCount) {
                        alert('deleted successfully')
                        setDeleteItem(response.data.deletedCount);
                    }
                })
        }
    }


    const handleAddrTypeChange = e => {
        setAddrType(e.target.value);

    };

    const handlerToUpdate = (id) => {
        const update = {
            status: addrtype,
            id: id,
        }

        axios.put('http://localhost:9000/orders/updatestatus', update)
            .then(function (response) {
                if (response.data.modifiedCount) {
                    alert('update successfully');
                    setModifiedCount(true);
                    setLoading(true)
                }
            })


    }
    if (loading) {
        return <div>
            <Spinner animation="border" variant="success" />
        </div>
    };
    return (
        <div>
            {allOrders.map(order => <ul>
                <li>{order?.name}</li>
                <li>{order?.user_name}</li>
                <li>{order?.user_email}</li>
                <li>{order?.status}</li>

                <button onClick={() => handlerToDelete(order?._id)}>delete</button>
                <div>
                    <select
                        onChange={handleAddrTypeChange}>
                        <option selected value="Approved">Approved</option>
                        <option value="Pending">Pending</option>
                        <option value="Cancel">Cancel</option>
                    </select>
                    <button onClick={() => handlerToUpdate(order?._id)}>Update</button>
                </div>
            </ul>)}
        </div>
    );
};

export default AllOrders;