import Nav from "./Nav"
import Footer from "./Footer";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DateContext } from "./date";
import { CartC } from "./CartContext";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Feedback from "./feedback";

export default function Shop() {
    const { addProduct, SetareCategory, category } = useContext(CartC);
    const {date} = useContext(DateContext);
    const [sort, setSort] = useState('');
    console.log(date)
    return (
        <>
            <Nav />
            <div id="shop" className="pt-[100px]">
                <div className="flex w-full justify-center md:flex-row flex-col items-center">
                    <div className="flex flex-col justify-center p-4 gap-1">
                        <h2>Filter by category:</h2>
                        <select value={category} className="block w-60 px-2 py-2 border border-gray-300 rounded-md bg-[var(--bg-color)] text-[var(--text-muted)] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" onChange={(e) => SetareCategory(e.target.value)}>
                            <option value="all">All</option>
                            <option value="beauty">Beauty</option>
                            <option value="fragrances">Fragrances</option>
                            <option value="furniture">Furniture</option>
                            <option value="groceries">Groceries</option>
                            <option value="home-decoration">Home Decoration</option>
                            <option value="kitchen-accessories">Kitchen Accessories</option>
                            <option value="laptops">Laptops</option>
                            <option value="men-shirts">Men Shirts</option>
                            <option value="men-shoes">Men Shoes</option>
                            <option value="men-watches">Men Watches</option>
                            <option value="mobile-accessories">Mobile Accessories</option>
                        </select>
                    </div>
                    <div className="flex flex-col p-4 gap-1">
                        <h2>Sort by:</h2>
                        <select className="hover:bg-[var(--bg-color)] block w-60 px-2 py-2 border border-gray-300 rounded-md bg-[var(--bg-color)] text-[var(--text-muted)] shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"onChange={(e) => setSort(e.target.value)}>
                            <option value="">Sortează după</option>
                            <option value="high">Preț Crescător</option>
                            <option value="low">Preț Descrescător</option>
                            <option value="discount">Reducere</option>
                        </select>
                    </div>
                </div>
                <div id='products' className="px-20">
                {date.filter(item => category ==='all' || item.category === category)
                .sort((a, b) => {
                    if (sort === "low") return b.price - a.price; 
                    if (sort === "high") return a.price - b.price;
                    if (sort === "discount") return (b.initialPrice - b.price) - (a.initialPrice - a.price);
                    return 0;
                  })
                .map(item => (
                    <div className="card flex flex-col justify-between" key={item.id}>
                        <Link to={`/products/${item.id}`}>
                        <div className="w-full flex justify-center">
                            <img id="img"src={item.images[0]} alt={item.title}></img>
                        </div>
                        </Link>
                        <h3 className="font-bold text-xl">{item.title}</h3>
                        {(item.initialPrice - item.price) > 0 && <div className="w-full flex justify-start text-[var(--text-muted)] items-center gap-2 pt-2 ">
                            <h2 className="line-through">{item.initialPrice} $</h2>
                            <p className="px-[5px] py-[1px] bg-red-500 text-white rounded-lg font-bold">-{(item.initialPrice - item.price).toFixed(2)} $</p>
                        </div>}
                        <p className="text-2xl py-4">{item.price} $</p>
                        <button className="cursor-pointer flex items-center justify-center p-3 bg-[var(--button-bg)] rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md text-[var(--button-text)] hover:bg-[var(--button-hover)] active:bg-[var(--button-active)]" onClick={() => addProduct(item)}><ShoppingCartIcon />Add to Cart</button>
                    </div>
                ))}
                </div>
            </div>
            <Feedback />
            <Footer />
        </>
        
    );
    }