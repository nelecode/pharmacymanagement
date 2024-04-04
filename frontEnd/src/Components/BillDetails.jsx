import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Table from './Table/Table'
import BillTable from './BillTable'

function BillDetails() {

    const singleBill = useLoaderData()
    console.log(singleBill)
    const { customer, order } = singleBill
    // console.log(customer)
    // console.log(order)

    const customHeight = {
        height: "100vh"
    }

    return (
        // <div style={customHeight} className='container shadow-lg my-4 rounded mh-100 border'>
        //     <div className="container py-3 h-100 d-flex flex-wrap gap-2 overflow-auto justify-content-around">

        //     </div>
        // </div>
        <div className="container my-4 py-3 min-vh-100 border shadow-lg rounded ">
            <h6 className='text-end'>Bill Date : {singleBill.createdAt.split("T")[0]}</h6>
            <div className="row g-2">
                <div className="col col-md-6 col-sm-12">
                    <p className='h6'>From</p>
                    <h5>City Medical Store</h5>
                    <div>Shop No. 55, Shohda Complex</div>
                    <div>Opp. Mohammad Ali sarai Hostel</div>
                    <div>Mominpura Nagpur - 440018.</div>
                </div>
                <div className="col col-md-6 col-sm-12">
                    <p className='h6'>To</p>
                    <div class="input-group input-group-sm mb-3">
                        <div>Customer Name :- {customer.customerName}</div>
                        {/* <input
                            type="text"
                            placeholder='Patient Name'
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                            name='customerName' */}
                        {/* // value={customer.customerName}
                        // onChange={handleCustomer}
                        // /> */}
                    </div>
                    <div class="input-group input-group-sm mb-3">
                        <div>Mobile No. :- {customer.mobNo}</div>
                        {/* <input
                            type="text"
                            placeholder='Contact No.'
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                            name='mobNo'
                        value={customer.mobNo}
                        onChange={handleCustomer}
                        /> */}
                    </div>
                    <div class="input-group input-group-sm mb-3">
                        <div>Address :- {customer.add}</div>
                        {/* <input
                            type="text"
                            placeholder='Address'
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                            name='add'
                        value={customer.add}
                        onChange={handleCustomer}
                        /> */}
                    </div>
                </div>
            </div>
            <div className="container border rounded mt-2">
                <h4 className='my-2'>List of billing products</h4>
                {/* <Table /> */}
                <BillTable data={order} />
            </div>
            <div className="container text-center mt-3">
                <button
                    className='btn btn-primary'
                // onClick={handleSubmit}
                >Print</button>
            </div>
        </div>
    )
}

export default BillDetails

export const billDetailsLoader = async ({ params }) => {
    const { id } = params
    const singleBill = fetch("http://localhost:3000/api/bill/" + id)
    return singleBill

}