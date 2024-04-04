// import React, { useContext, useEffect, useState } from 'react'
// import { BillContext } from '../../Context/PharmaContext'
// // import data from "../../../data"
// import axios from "axios"

import { useContext } from "react"
import { PharmaProduct } from "./Context/ProductContext"

function Search() {
    // const [data, setData] = useState([])
    // const { setFilteredItems, query, setQuery } = useContext(BillContext)

    // useEffect(() => {
    //     setFilteredItems(data.filter(item => item.name.includes(query)))
    // }, [query])

    // useEffect(() => {
    //     const productData = async function getProducts() {
    //         try {
    //             const response = await axios.get('http://localhost:3000/api/products');
    //             console.log(response.data);
    //             setData(response.data);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    //     productData()
    // }, [])
    // const [query, setQuery] = useState("")
    const { query, setQuery } = useContext(PharmaProduct)

    return (
        <div className="container text-center w-75">
            <div class="input-group mb-3 mt-3">
                <span class="input-group-text" id="inputGroup-sizing-default"><i class="bi bi-search"></i></span>
                <input
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    type="text"
                    placeholder='Search the products'
                    class="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default" />
            </div>
        </div>
    )
}

export default Search