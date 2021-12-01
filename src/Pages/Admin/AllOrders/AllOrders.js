import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import "./AllOrders.css"

const AllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modifiedCount, setModifiedCount] = useState('');
    const [deleteItem, setDeleteItem] = useState('');
    const [addrtype, setAddrType] = useState('')

    useEffect(() => {
        console.log('loaded');
        fetch('https://spooky-asylum-59819.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setAllOrders(data);
                setModifiedCount('');
                setLoading(false);
            })

    }, [modifiedCount, deleteItem]);

    const handlerToDelete = id => {
        const proceed = window.confirm('Are You Confirm to delete');
        if (proceed) {
            axios.delete(`https://spooky-asylum-59819.herokuapp.com/orders/${id}`)
                .then(function (response) {
                    if (response.data.deletedCount) {
                        alert('deleted successfully')
                        setDeleteItem(true);
                        setDeleteItem('')
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

        axios.put('https://spooky-asylum-59819.herokuapp.com/orders/updatestatus', update)
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
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Place Name</th>
                        <th>User Name</th>
                        <th>user Email</th>
                        <th>Status</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {allOrders.map(order =>
                        <tr>

                            <td>{order?.name}</td>
                            <td>{order?.user_name}</td>
                            <td>{order?.email}</td>
                            <td>{order?.status}</td>
                            <td>   <select
                                onChange={handleAddrTypeChange}>
                                <option >Chose a option</option>
                                <option value="Pending">Pending</option>
                                <option value="Approved">Approved</option>
                                <option value="cancelled">cancelled</option>
                            </select>
                                <button className="update-btn" onClick={() => handlerToUpdate(order?._id)}>Update</button></td>
                            <td><button className="update-btn" onClick={() => handlerToDelete(order?._id)}><i class="fas fa-trash"></i></button></td>
                        </tr>

                    )}
                </tbody>
            </Table>
        </div>
    );
};

export default AllOrders;