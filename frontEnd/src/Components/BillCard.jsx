import { useContext, useEffect } from "react"
import { Link, redirect } from "react-router-dom"
import { PharmaProduct } from "./Context/ProductContext"
import axios from "axios"


function BillCard({ data }) {
    const { customer, order, _id } = data
    // console.log(order)
    const totalAmount = order.reduce((acc, curr) => acc + curr.productId.rate * curr.quantity, 0)
    // console.log(totalAmount)


    const customStyle = {
        width: "20rem",
        height: "30%"
    }

    // const { setBillingItems } = useContext(PharmaProduct)

    // function handleAdd() {
    //     setBillingItems(pre => {
    //         return [...pre, data]
    //     })
    // }

    // const handleDelete = async (id) => {
    //     const deleteItem = confirm("Are you sure! You want to delete the item")
    //     if (deleteItem) {
    //         try {
    //             const deletee = await axios.delete(`http://localhost:3000/api/products/${id}`)
    //             // redirect("/")
    //         } catch (error) {
    //             console.log("error while deleting the item")
    //         }
    //     }
    // }

    return (
        <div class="card text-center" style={customStyle}>
            <div class="card-body">
                <h5 class="card-title">{customer.customerName}</h5>
                <div className="row my-2">
                    <div className="col">Items : {order.length} nos</div>
                    <div className="col">Amount : Rs.{totalAmount}/-</div>
                </div>
                <div className="row g-1 mt-3">
                    {/* <div className="col">
                        <a
                            // href="#"
                            class="btn btn-success"
                        // onClick={handleAdd}
                        >Add</a>
                    </div> */}
                    <div className="col">
                        <Link to={"bill/" + _id}>
                            <a class="btn btn-outline-primary">View</a>
                        </Link>
                    </div>
                    {/* <div className="col">
                        <a
                            // href="#"
                            class="btn btn-outline-danger"
                        // onClick={() => handleDelete(_id)}
                        >Delete</a>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default BillCard