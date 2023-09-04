import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter } from "react-router-dom";

import Cart from "./Components/Cart";
import ProductInfo from "./Components/ProductInfo";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
import Index from "./Components/Index";
import Products from "./Components/Products";
import Checkout from "./Components/Checkout";
import SubmitCheckout from "./Components/SubmitCheckout";
import CheckoutCart from "./Components/CheckoutCart";
import Search from "./Components/Search";
import PaymentCheckout from "./Components/PaymentCheckout";

import PrivateRoutes from "./Protected Routes/PrivateRoutes";
import SucessPage from "./Components/SucessPage";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="payment" element={<PaymentCheckout />} />
          <Route path="success" element={<SucessPage />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="search" element={<Search />} />
          <Route path="info" element={<ProductInfo />} />
          <Route path="submitcheckout" element={<SubmitCheckout />} />
          <Route element={<PrivateRoutes />}>
            <Route path="checkoutCart" element={<CheckoutCart />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
