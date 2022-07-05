import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'components/Home'
import NotFound from 'components/NotFound'
import MainLayout from 'components/Layout/MainLayout';
import Shop from 'features/Shop';
import Checkout from 'components/Checkout';
import SingleProduct from 'features/SingleProduct';



export const AppRoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:slug" element={<SingleProduct />} />

          <Route path="checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};