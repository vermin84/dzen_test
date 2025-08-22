
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import Orders from './pages/Orders'
import Products from './pages/Products'

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
        <Route index  element={<Orders />} />
          <Route index path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
