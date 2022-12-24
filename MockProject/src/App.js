import { Route, Routes } from 'react-router-dom';
import './App.css';
import CheckoutPage from './Pages/Checkout-Page';
import DetailsPage from './Pages/Details-Page';
import LoginPage from './Pages/Login/Login-Page';
import LogoPage from './Pages/Logo-Page';
import MainPage from './Pages/Main-Page';
import ProductPage from './Pages/Product-Page'
function App() {
  return (
    <Routes>
        <Route path="/" element={<MainPage/>}>
          <Route path="/home" element={<LogoPage/>}/>
          <Route path="/products" element={<ProductPage/>}>
            <Route path='/products/:detailsId' element ={<DetailsPage/>}/>
          </Route>
          <Route path="/reviews" element={<LogoPage/>}/>
          <Route path="/checkout" element={<CheckoutPage/>}/>
        </Route>
          <Route path="/login" element={<LoginPage/>}/>
    </Routes>
  );
}

export default App;
