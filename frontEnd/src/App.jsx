import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Root from "./Layout/Root";
import Home, { productsLoader } from "./Pages/Home";
import ProductDetails, { productDetailsLoader } from "./Components/ProductDetails";
import AddNewItems from "./Pages/AddNewItems";
import Billing from "./Pages/Billing";
import Invoice, { billLoader } from "./Pages/Invoice";
import BillDetails, { billDetailsLoader } from "./Components/BillDetails";
import NotFound from "./Components/NotFound";
import ProductError from "./Components/ProductError";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route
        index
        element={<Home />}
        loader={productsLoader}
      />
      <Route
        path="/product/:id"
        element={<ProductDetails />}
        loader={productDetailsLoader}
      // errorElement={<ProductError />}
      />
      <Route
        // path="/bill/:id"
        path="invoice/bill/:id"
        element={<BillDetails />}
        loader={billDetailsLoader}
      />
      <Route
        path="addItems"
        element={<AddNewItems />}
      />
      <Route
        path="billing"
        element={<Billing />}
      />
      <Route
        loader={billLoader}
        path="invoice"
        element={<Invoice />}
      />

      <Route path="*" element={<NotFound />} />

    </Route>
  )
);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App