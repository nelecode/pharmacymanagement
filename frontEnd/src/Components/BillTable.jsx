import React from 'react'

function BillTable({ data }) {
    // { console.log(data) }

    const grossTotal = data.reduce((acc, curr) => acc + (!curr.quantity ? 0 : curr.quantity) * (curr.productId.rate), 0)
    // console.log(grossTotal)
    return (
        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr className='text-center'>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Manufacture</th>
                        <th scope="col">Expiry</th>
                        <th scope="col">Rate</th>
                        <th scope="col" style={{ width: "10%" }}>Qty</th>
                        <th scope="col">Total Amount</th>
                        {/* <th scope="col">Action</th> */}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item._id} className='text-center'>
                            <th scope="row">{index + 1}</th>
                            <td>{item.productId.productName}</td>
                            <td>{item.productId.manufacture}</td>
                            <td>
                                {item.productId.expiry.split("T")[0]}
                            </td>
                            <td> {item.productId.rate} /pc.</td>
                            <td>
                                {item.quantity}
                                {/* <input
                                    style={{ width: "35%" }}
                                    type="text"
                                    value={item.qty || ''}
                                    onChange={(e) => handleQty(e, item._id)}
                                /> */}
                            </td>
                            <td>{(item.quantity || 0) * item.productId.rate} Rs.</td>
                            {/* <td
                                style={{ color: "red", cursor: "pointer" }}
                                onClick={() => handleRemove(item._id)}
                            >X</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='container text-end'>
                <h5 className='me-5'>GrossTotal:- {grossTotal}/- Rs.</h5>
            </div>
        </div>
    )
}

export default BillTable