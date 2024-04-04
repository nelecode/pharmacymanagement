import { NavLink } from 'react-router-dom'
import "./header.css"
import { useContext } from 'react'
import { PharmaProduct } from './Context/ProductContext'


function NavBar() {
    const { billingItems } = useContext(PharmaProduct)


    return (
        <>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container">
                    <span class="navbar-brand"><NavLink to="/">Pharmacy Management</NavLink ></span>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><NavLink to="/">Pharmacy Management</NavLink ></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <span class="nav-link active" aria-current="page"><NavLink to="/">Stock</NavLink></span>
                                </li>
                                <li class="nav-item">
                                    <span class="nav-link active"><NavLink to="additems">Add-Item</NavLink></span>
                                </li>
                                <li class="nav-item">
                                    <span class="nav-link active"><NavLink to="invoice">Invoice</NavLink></span>
                                </li>
                            </ul>
                            <NavLink to="billing">
                                <button type="button" class="btn btn-sm btn-primary">
                                    <i class="bi bi-receipt-cutoff"></i> Bill<span class="badge text-bg-secondary">{billingItems.length}</span>
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar