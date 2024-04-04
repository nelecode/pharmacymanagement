// import { useContext, useState } from "react"
// import { PharmaProduct } from "../Context/ProductContext"


// function Table() {
//     const { billingItems, setBillingItems } = useContext(PharmaProduct)
//     const [qty, Setqty] = useState(0)

//     function handleRemove(productId) {
//         setBillingItems(billingItems.filter(item => item._id !== productId))
//     }

//     function handleQty(e, productName) {
//         const { value } = e.target
//         Setqty(value)
//         setBillingItems(pre =>
//             pre.map(item => item.name === productName ? { ...item, qty: parseInt(value) } : item))
//     }
//     console.log(billingItems)

//     return (
//         <div className="container">
//             <table class="table table-striped">
//                 <thead>
//                     <tr className='text-center'>
//                         <th scope="col">#</th>
//                         <th scope="col">Name</th>
//                         <th scope="col">Qty Avlb</th>
//                         <th scope="col">Expiry</th>
//                         <th scope="col">Rate</th>
//                         <th scope="col" style={{ width: "10%" }}>Qty</th>
//                         <th scope="col">Total Amount</th>
//                         <th scope="col">Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>

//                     {billingItems.map((item, index) => {
//                         return <tr key={item._id} className='text-center'>
//                             <th scope="row">{index + 1}</th>
//                             <td>{item.name}</td>
//                             <td>{item.qtyAvailable}</td>
//                             <td>{item.expiry}</td>
//                             <td> {item.rate} /pc.</td>
//                             <td>
//                                 <input
//                                     style={{ width: "35%" }}
//                                     type="text"
//                                     // name={item.name}
//                                     // id=""
//                                     value={!item.qty && 0}
//                                     onChange={(e) => handleQty(e, item.name)}
//                                 />
//                             </td>
//                             <td>{!item.qty && 0 * item.rate}Rs.</td>
//                             <td
//                                 style={{ color: "red", cursor: "pointer" }}
//                                 onClick={() => handleRemove(item._id)}
//                             >X</td>
//                         </tr>
//                     })}

//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default Table

import React, { useContext, useState } from "react";
import { PharmaProduct } from "../Context/ProductContext";

function Table() {
    const { billingItems, setBillingItems } = useContext(PharmaProduct);
    const [isSubmit, setIsSubmit] = useState(false)

    function handleRemove(productId) {
        setBillingItems(billingItems.filter(item => item._id !== productId));
    }

    function handleQty(e, productId) {
        const { value } = e.target;
        setBillingItems(prevItems =>
            prevItems.map(item =>
                item._id === productId ? { ...item, qty: parseInt(value) } : item
            )
        );
    }

    const grossTotal = billingItems.reduce((acc, curr) => acc + (!curr.qty ? 0 : curr.qty) * (curr.rate), 0)

    return (
        <div className="container">
            <table className="table table-striped">
                <thead>
                    <tr className='text-center'>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Qty Avlb</th>
                        <th scope="col">Expiry</th>
                        <th scope="col">Rate</th>
                        <th scope="col" style={{ width: "10%" }}>Qty</th>
                        <th scope="col">Total Amount</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {!billingItems.length == 0 ? billingItems.map((item, index) => (
                        <tr key={item._id} className='text-center'>
                            <th scope="row">{index + 1}</th>
                            <td>{item.productName}</td>
                            <td>{item.qtyAvailable}</td>
                            <td>{item.expiry.split("T")[0]}</td>
                            <td> {item.rate} /pc.</td>
                            <td>
                                <input
                                    style={{ width: "35%" }}
                                    type="text"
                                    value={item.qty || ''}
                                    onChange={(e) => handleQty(e, item._id)}
                                />
                            </td>
                            <td>{(item.qty || 0) * item.rate} Rs.</td>
                            <td
                                style={{ color: "red", cursor: "pointer" }}
                                onClick={() => handleRemove(item._id)}
                            >X</td>
                        </tr>
                    )) : <h4>No Items</h4>}
                </tbody>
            </table>
            <div className='container text-end'>
                <h5 className='me-5'>GrossTotal:- {grossTotal}/- Rs.</h5>
            </div>
        </div>
    );
}

export default Table;
