import React from 'react'

function SingleProduct({ data }) {
    const { name, manufacture, rate, expiry, batchNo, qtyAvailable } = data
    return (
        <div className="container w-75 mt-4">
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Product Name</label>
                <input readOnly type="text" className="form-control" id="exampleFormControlInput1" placeholder={name} />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Manufacture</label>
                <input readOnly type="text" className="form-control" id="exampleFormControlInput1" placeholder={manufacture} />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Rate</label>
                <input readOnly type="text" className="form-control" id="exampleFormControlInput1" placeholder={rate} />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Expiry</label>
                <input readOnly type="text" className="form-control" id="exampleFormControlInput1" placeholder={expiry} />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Batch No.</label>
                <input readOnly type="text" className="form-control" id="exampleFormControlInput1" placeholder={batchNo} />
            </div>
            <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Qty. Available</label>
                <input readOnly type="text" className="form-control" id="exampleFormControlInput1" placeholder={qtyAvailable} />
            </div>
        </div>
    )
}

export default SingleProduct