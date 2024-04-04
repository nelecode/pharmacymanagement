import React, { useContext, useEffect, useState } from 'react'
import BillSearch from '../Components/BillSearch'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import BillCard from '../Components/BillCard'
import { PharmaProduct } from '../Components/Context/ProductContext'

function Invoice() {
    const { data } = useLoaderData()
    const { billQuery } = useContext(PharmaProduct)
    const [billData, setBillData] = useState([])
    // console.log(data)

    useEffect(() => {
        const filteredBill = data.filter(item => item.customer.customerName.includes(billQuery))
        setBillData(filteredBill)
    }, [billQuery])
    // console.log(billData)

    const customHeight = {
        height: "100vh"
    }

    return (
        <div style={customHeight} className='container shadow-lg my-4 rounded mh-100 border'>
            <BillSearch />
            {/* <Search /> */}
            <div className="container py-3 h-100 d-flex flex-wrap gap-2 overflow-auto justify-content-around">
                {!billData.length == 0 ? billData.map(item => <BillCard data={item} />) : <h4>No Bill Items to Show</h4>}
                {/* <BillCard /> */}
            </div>
        </div>
    )
}

export const billLoader = async () => {
    try {
        const getBill = await axios.get("http://localhost:3000/api/bill")
        return getBill
    } catch (error) {
        console.log("error while fetching bill data", error)
    }
}

export default Invoice