import React, { useState } from 'react'
import axios from "axios"

function AddNewItems() {
    const [productDetails, setProductDetails] = useState({
        productName: "",
        manufacture: "",
        rate: "",
        expiry: "",
        batchNo: "",
        qtyAvailable: ""
    })
    // const [newItem, setNewItem] = useState([])

    const customHeight = {
        height: "100vh"
    }

    function handleNewItem(e) {
        const { name, value } = e.target
        setProductDetails(pre => {
            return { ...pre, [name]: value }
        })
    }

    const handleAddItem = async () => {
        // setNewItem(productDetails)

        try {
            const res = await axios.post("http://localhost:3000/api/products", productDetails)
        } catch (error) {
            console.log("error while posting data to back end", error)
        }

        setProductDetails({
            productName: "",
            manufacture: "",
            rate: "",
            expiry: "",
            batchNo: "",
            qtyAvailable: ""
        })
    }

    return (
        <div style={customHeight} className='container shadow-lg my-4 rounded mh-100 border'>
            <div className="container w-75 mt-4">
                <div className="mb-3">
                    <label for="productName" className="form-label">Product Name</label>
                    <input
                        required
                        type="text"
                        className="form-control"
                        // id="productName"
                        name='productName'
                        value={productDetails.productName}
                        onChange={handleNewItem}
                    />
                </div>
                <div className="mb-3">
                    <label for="manufacture" className="form-label">Manufacture</label>
                    <input
                        required
                        type="text"
                        className="form-control"
                        id="manufacture"
                        name='manufacture'
                        value={productDetails.manufacture}
                        onChange={handleNewItem}
                    />
                </div>
                <div className="mb-3">
                    <label for="rate" className="form-label">Rate</label>
                    <input
                        required
                        type="number"
                        className="form-control"
                        id="rate"
                        name='rate'
                        value={productDetails.rate}
                        onChange={handleNewItem}
                    />
                </div>
                <div className="mb-3">
                    <label for="expiry" className="form-label">Expiry</label>
                    <input
                        required
                        type="date"
                        className="form-control"
                        id="expiry"
                        name='expiry'
                        value={productDetails.expiry}
                        onChange={handleNewItem}
                    />
                </div>
                <div className="mb-3">
                    <label for="batchNo" className="form-label">Batch No.</label>
                    <input
                        required
                        type="text"
                        className="form-control"
                        id="batchNo"
                        name='batchNo'
                        value={productDetails.batchNo}
                        onChange={handleNewItem}
                    />
                </div>
                <div className="mb-3">
                    <label for="qtyAvailable" className="form-label">Qty. Available</label>
                    <input
                        required
                        type="number"
                        className="form-control"
                        id="qtyAvailable"
                        name='qtyAvailable'
                        value={productDetails.qtyAvailable}
                        onChange={handleNewItem}
                    />
                </div>
                <div className="container text-center">
                    <button
                        className='btn btn-success'
                        onClick={handleAddItem}
                    >Add</button>
                </div>
            </div>
        </div>
    )
}

export default AddNewItems