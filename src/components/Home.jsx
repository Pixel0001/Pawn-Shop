import Nav from "./Nav";
import Footer from "./Footer";
import pers from '../assets/pers.png'
import {useContext} from 'react'
import { DateContext } from "./date";
import { Link } from "react-router-dom"
import {CartC} from "./CartContext";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { ThemeContext } from "./Theme";
import pawn_shop from '../assets/pawn_shop.png'
import pawn2 from '../assets/pawn2.png'
import Feedback from "./feedback";

export default function Home() {
    const {theme} = useContext(ThemeContext);
    const { allCategory, date } = useContext(DateContext)
    const {SetareCategory, addProduct} = useContext(CartC)

    return (
        <>
            <Nav />
            <div id="home" className="bg-[var(--primary-color)]">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 min-h-[95vh] pt-[100px] place-items-center px-4 lg:px-20">
                    <div className="hero_text xl:col-start-1 xl:row-start-1">
                        <h1 className="font-[Lora] text-4xl md:text-6xl font-bold text-[var(--text-color)]">Valoare reală, prețuri corecte</h1>
                        <p className="font-[Roboto] text-xl md:text-3xl leading-[150%] text-[var(--text-muted)] my-16 text-justify">
                            Descoperă selecția noastră de bijuterii, ceasuri și electronice la prețuri avantajoase! 
                            La Pawn Shop, fiecare produs este verificat și pregătit pentru o nouă viață. 
                            Alege calitatea la un preț corect și bucură-te de oferte pe care nu le găsești nicăieri altundeva.
                        </p>
                        <a href="#oferte">
                            <button className="border py-[1em] px-[2em] bg-[var(--button-bg)] text-[var(--button-text)] rounded-lg text-2xl cursor-pointer hover:bg-[var(--button-hover)] active:bg-[var(--button-active)]">
                                Vezi ofertele
                            </button>
                        </a>
                    </div>
                    <img 
                        className="hero_img xl:col-start-2 xl:row-start-1 w-full max-w-[520px]" 
                        src={pers} 
                        alt="hero" 
                    />
                    <div className="xl:col-span-2 flex items-center gap-8 border bg-[var(--primary-color)] px-4 w-full">
                        {theme === 'light' 
                            ? <img src={pawn_shop} alt="logo" className="w-auto h-auto" id="logo"/> 
                            : <img src={pawn2} className="w-auto h-auto" alt="logo" id="logo"/>
                        }
                        <h1 className="text-center flex items-center p-4 font-bold text-md md:text-5xl text-[var(--text-color)]">
                            Pawn Shop – Bijuterii, ceasuri și electronice verificate, pentru tine
                        </h1>
                    </div>
                </div>
                <div className="category px-20 [@media(max-width:700px)]:px-2">
                    <h1 className="font-bold text-5xl my-20 text-[var(--text-color)]">Categories</h1>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {allCategory.map((c, index)=> (
                            <Link to="/shop" key={index}>
                                <div 
                                    className="cat text-[var(--text-color)] border rounded-md border-gray-500 w-50 h-60 cursor-pointer shadow-md" 
                                    onClick={() => SetareCategory(c.category)}
                                >
                                    <img src={c.image} alt={c.category}/>
                                    <p className="text-center font-bold">
                                        {c.category.slice(0,1).toUpperCase() + c.category.slice(1)}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="px-20 [@media(max-width:700px)]:px-2">
                    <h1 className="font-bold text-5xl mt-20 text-[var(--text-color)]" id='oferte'>Ofertele Săptămânii</h1>
                    <div className="flex flex-wrap gap-4 justify-center p-20 rounded-xl ">
                        {date.filter(p => p.discountPercentage >= 15.3)
                        .sort((a, b) => {
                            return (b.initialPrice - b.price) - (a.initialPrice - a.price);
                        })
                        .map(item => (
                            <div className="card flex flex-col justify-between" key={item.id}>
                                <Link to={`/products/${item.id}`}>
                                    <div className="w-full flex justify-center">
                                        <img id="img" src={item.images[0]} alt={item.title}></img>
                                    </div>
                                </Link>
                                <h3 className="font-bold text-xl">{item.title}</h3>
                                {(item.initialPrice - item.price) > 0.0 && (
                                    <div className="w-full flex justify-start text-[var(--text-muted)] items-center gap-2 pt-2">
                                        <h2 className="line-through">{item.initialPrice} $</h2>
                                        <p className="px-[5px] py-[1px] bg-red-500 text-white rounded-lg font-bold">
                                            -{(item.initialPrice - item.price).toFixed(2)} $
                                        </p>
                                    </div>
                                )}
                                <p className="text-2xl py-4">{item.price} $</p>
                                <button 
                                    className="cursor-pointer flex items-center justify-center p-3 bg-[var(--button-bg)] rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md text-[var(--button-text)] hover:bg-[var(--button-hover)] active:bg-[var(--button-active)]" 
                                    onClick={() => addProduct(item)}
                                >
                                    <ShoppingCartIcon /> Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <Link to='/shop'>
                            <button className="cursor-pointer [@media(max-width:700px)]:px-8 px-[8em] py-[1.5em] text-2xl bg-[var(--button-bg)] mb-10 text-[var(--button-text)] hover:bg-[var(--button-hover)] active:bg-[var(--button-active)] flex items-center gap-2">
                                See Shop <ShoppingBasketIcon fontSize="large"/>
                            </button>
                        </Link>
                    </div>
                </div>

                <Feedback />
            </div>
            <Footer />
        </>
    );
}
