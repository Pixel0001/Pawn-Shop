import { ThemeContext } from "./Theme";
import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { CartC } from "./CartContext";
import pawn_shop from '../assets/pawn_shop.png'
import pawn2 from '../assets/pawn2.png'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Nav(){
    const {theme, schimbaTema} = useContext(ThemeContext);
    const {cart} = useContext(CartC);

    const navRef = useRef(null);
    const lastScroll = useRef(0);
    let nav = document.getElementById('nav');

    useEffect(() => {
        const nav = navRef.current;
        function handleScroll() {
          let currentScroll = window.scrollY;
          if (currentScroll > lastScroll.current) {
            nav.style.top = "-100px";
          } else {
            nav.style.top = "0";
          }
          lastScroll.current = currentScroll;
        }
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const openNav = () => {
      const navM = document.querySelector('.nav-m');
      navM.style.right = '0';
    }
    const closeNav = () => {
      const navM = document.querySelector('.nav-m');
      navM.style.right = '-375px';
    }
    return(
      <>
        <nav id='nav' className="px-[100px] py-[15px] [@media(max-width:600px)]:px-[10px] z-100" ref={navRef}>
            <div className="flex gap-2 items-center">
                {theme === 'light' ? <img src={pawn_shop} alt="logo" id="logo"/> : <img src={pawn2} alt="logo" id="logo"/>}
                <h1 className="font-[Cinzel] text-3xl">Pawn Shop</h1>
            </div>
            <div className="flex gap-24 [@media(max-width:1150px)]:!hidden">
                <Link to="/">Acasa</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/about">Despre</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <button onClick={schimbaTema}>
              {theme === 'light' 
                ? <DarkModeIcon className="hover:text-blue-500 cursor-pointer !w-[35px] !h-[35px]" fontSize="large"/>
                : <LightModeIcon className="hover:text-yellow-500 cursor-pointer" fontSize="large"/>}
            </button>
            <div className="flex gap-4 items-center">
              <div id='cart' className="[@media(max-width:1150px)]:!hidden">
                  <Link to="/cart" id="cart_p"><ShoppingCartIcon fontSize="large" /></Link>
                  <p className="text-white bg-red-500 h-fit p-1 translate-x-[-7px]">{cart.length}</p>
              </div>
              <MenuIcon className="cursor-pointer !text-3xl [@media(min-width:1150px)]:!hidden" onClick={openNav}/>
            </div>
        </nav>
        <div className="w-[375px] h-screen fixed top-0 right-[-375px] bg-[var(--primary-color)] p-4 nav-m ">
          <CloseIcon className="cursor-pointer !text-3xl text-[var(--text-color)]" onClick={closeNav}/>
          <div className="flex gap-2 items-center my-8">
                {theme === 'light' ? <img src={pawn_shop} alt="logo" id="logo"/> : <img src={pawn2} alt="logo" id="logo"/>}
                <h1 className="font-[Cinzel] text-[var(--text-color)] text-3xl">Pawn Shop</h1>
            </div>
          <div className="flex flex-col">
            <Link to="/"><div className="font-bold py-4 px-4 text-[var(--text-color)] hover:text-[var(--button-text)] hover:bg-[var(--navbar-hover)]">Acasa</div></Link>
            <Link to="/shop"><div className="font-bold py-4 px-4 text-[var(--text-color)] hover:text-[var(--button-text)] hover:bg-[var(--navbar-hover)]">Shop</div></Link>
            <Link to="/about"><div className="font-bold py-4 px-4 text-[var(--text-color)] hover:text-[var(--button-text)] hover:bg-[var(--navbar-hover)]">Despre</div></Link>
            <Link to="/contact"><div className="font-bold py-4 px-4 text-[var(--text-color)] hover:text-[var(--button-text)] hover:bg-[var(--navbar-hover)]">Contact</div></Link>
          </div>
          <div id='cart' className="px-4 mt-8">
            <Link to="/cart" id="cart_p" className="text-[var(--text-color)] hover:text-[var(--navbar-hover)]"><ShoppingCartIcon fontSize="large" /></Link>
            <p className="text-white bg-red-500 h-fit p-1 translate-x-[-7px]">{cart.length}</p>
          </div>
        </div>
        </>
    )
}
