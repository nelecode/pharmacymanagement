import { useContext } from "react"
import { Link, redirect } from "react-router-dom"
import { PharmaProduct } from "./Context/ProductContext"
import axios from "axios"


function SingleCard({ data }) {
    const { _id, productName, rate, qtyAvailable } = data
    // console.log(name, rate, qtyAvailable, manufacture, batchNo, expiry)


    const customStyle = {
        width: "20rem",
        height: "26%"
    }

    // function handleDelete(sr_no) {
    //     const dlt = confirm("are you sure!you want to delete the product.")

    //     dlt && setFilteredItems(
    //         filteredItems.filter(item => item.sr_no !== sr_no)
    //     )
    //     setQuery("")
    // }

    // function handleAdd(sr_no) {
    //     setBillItems(pre => {
    //         return (
    //             [...pre, ...filteredItems.filter(item => item.sr_no == sr_no)]
    //         )
    //     })
    // [...pre, filteredItems.filter(item => item.sr_no == sr_no)])
    // setQuery("")
    // }

    const { setBillingItems } = useContext(PharmaProduct)

    function handleAdd() {
        setBillingItems(pre => {
            return [...pre, data]
        })
    }

    const handleDelete = async (id) => {
        const deleteItem = confirm("Are you sure! You want to delete the item")
        if (deleteItem) {
            try {
                const deletee = await axios.delete(`http://localhost:3000/api/products/${id}`)
                // redirect("/")
            } catch (error) {
                console.log("error while deleting the item")
            }
        }
    }

    return (
        <div class="card text-center" style={customStyle}>
            <div class="card-body">
                <h5 class="card-title">{productName}</h5>
                <div className="row my-2">
                    <div className="col">Rate : Rs. {rate}/pcs</div>
                    <div className="col">Qty_Avlb : {qtyAvailable} nos</div>
                </div>
                <div className="row g-1">
                    <div className="col">
                        <a
                            // href="#"
                            class="btn btn-success"
                            onClick={handleAdd}
                        >Add</a>
                    </div>
                    <div className="col">
                        <Link to={"product/" + _id}>
                            <a class="btn btn-outline-primary">View</a>
                        </Link>
                    </div>
                    <div className="col">
                        <button
                            disabled={true}
                            // href="#"
                            class="btn btn-outline-danger"
                            onClick={() => handleDelete(_id)}
                        >Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleCard