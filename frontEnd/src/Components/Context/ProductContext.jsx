import React, { createContext, useState, } from 'react'


export const PharmaProduct = createContext()

function ProductContext({ children }) {
    const [query, setQuery] = useState("")
    const [billQuery, setBillQuery] = useState("")
    const [billingItems, setBillingItems] = useState([])
    return (
        <PharmaProduct.Provider value={{ query, setQuery, billingItems, setBillingItems, billQuery, setBillQuery }}>
            {children}
        </PharmaProduct.Provider>
    )
}

export default ProductContext