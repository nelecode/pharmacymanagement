import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ProductContext from './Components/Context/ProductContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductContext>
      <App />
    </ProductContext>
  </React.StrictMode>,
)
