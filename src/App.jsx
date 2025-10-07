import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import Product from "./components/Product"
import PrivacyPolicy from "./components/Policy";
import Succes from "./components/Succes";

import { CartContext } from "./components/CartContext";
import Theme from "./components/Theme";
import Date from "./components/date";
import  ExperienceProvider  from "./components/ExperienceContext";
import Experience from "./components/Experience";
export default function App() {
  return (
    <>
      <Date>
        <CartContext>
          <Theme>
            <ExperienceProvider>
              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/shop' element={<Shop/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/products/:id' element={<Product />}/>
                <Route path='/success' element={<Succes/>}/>
                <Route path='/policy' element={<PrivacyPolicy/>}/>
              </Routes>
              <Experience />
            </ExperienceProvider>
          </Theme>
        </CartContext>
      </Date>
    </>
  );
}
