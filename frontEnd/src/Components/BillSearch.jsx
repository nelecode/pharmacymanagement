import { useContext } from "react"
import { PharmaProduct } from "./Context/ProductContext"


function Search() {
    const { billQuery, setBillQuery } = useContext(PharmaProduct)

    return (
        <div className="container text-center w-75">
            <div class="input-group mb-3 mt-3">
                <span class="input-group-text" id="inputGroup-sizing-default"><i class="bi bi-search"></i></span>
                <input
                    onChange={e => setBillQuery(e.target.value)}
                    value={billQuery}
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