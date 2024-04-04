import { useLoaderData } from 'react-router-dom'
import Card from "../Components/Card"
import Search from '../Components/Search'
import { useContext, useEffect, useState } from 'react'
import { PharmaProduct } from '../Components/Context/ProductContext'

function Home() {
    const products = useLoaderData()
    const [dataApi, setDataApi] = useState(products)
    const [filteredItems, setFilteredItems] = useState([])
    const { query } = useContext(PharmaProduct)

    useEffect(() => {
        const filteredProducts = dataApi.filter(item => item.productName.includes(query))
        setFilteredItems(filteredProducts)
    }, [query])

    // console.log(query)

    const customHeight = {
        height: "100vh"
    }

    return (
        <div style={customHeight} className='container shadow-lg my-4 rounded mh-100 border'>
            <Search />
            <div className="container py-3 h-100 d-flex flex-wrap gap-2 overflow-auto justify-content-around">
                {!filteredItems.length == 0 ? filteredItems.map(product => <Card key={product._id} data={product} />) : <h4>No Item Found</h4>}
            </div>
        </div>
    )
}

export default Home

export const productsLoader = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/products")
        return res
    } catch (error) {
        console.log("error while fetching data", error)
    }
}