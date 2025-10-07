import Footer from "./Footer";
import Nav from "./Nav";
import {useContext, useState, useEffect, createContext} from "react"
import {CartC} from "./CartContext"
import Feedback from "./feedback";
import {Link} from "react-router-dom"
import Portal from "./Portal";
import { useMemo } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

export const portalContext = createContext()

export default function Cart(){
    const {cart, increment, decrement, deleteProduct, setCart} = useContext(CartC);
    const [portal, setPortal] = useState(false)

    const total = useMemo(() => {
        return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
      }, [cart]);
    return(
        <>
            <Nav />
            <div id='cart_div' className="bg-[var(--primary-color)] w-full text-[var(--text-color)] pt-[70px]">
                <div className="flex flex-col">
                {cart.map(item => (
                    <div key={item.id} className="flex border [@media(max-width:1200px)]:flex-col gap-4 p-4">
                        <Link to={`/products/${item.id}`}><img className="h-80" src={item.images[0]} alt={item.title}></img></Link>
                        <div className=" flex flex-col justify-evenly flex-1">
                            <div className="flex justify-between items-center gap-2 md:mr-20">
                                <h3 className="text-3xl font-bold">{item.title}</h3>
                                <DeleteIcon fontSize="large" className="cursor-pointer hover:text-red-500" onClick={()=>deleteProduct(item)}/>
                            </div>
                            <div className="flex gap-2 items-center">
                                <p className="line-through text-[var(--text-muted)] my-4 text-3xl">{(item.initialPrice*item.qty).toFixed(2)}$</p>
                                <p className="p-1 bg-red-500 rounded-xl font-bold text-white">- {((item.initialPrice - item.price) * item.qty).toFixed(2)} $</p>
                            </div>
                            <p className="text-2xl mb-4">Price: {item.price*item.qty} $</p>
                            <p className="text-[var(--text-muted)]">{item.description}</p>
                            <div className="flex gap-4 items-center mt-4">
                                <p className="text-3xl cursor-pointer" onClick={() => decrement(item)}>-</p>
                                <p className="text-3xl">{item.qty}</p>
                                <p className="text-3xl cursor-pointer" onClick={() => increment(item)}>+</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                {total !== 0 && 
                <div className="flex justify-between md:px-20 py-4 items-center [@media(max-width:900px)]:flex-wrap">
                    <h1 className="[@media(max-width:900px)]:flex [@media(max-width:900px)]:jusify-center [@media(max-width:900px)]:ml-2 font-bold text-3xl my-4">Total: {total.toFixed(2)} $</h1>
                    <div onClick={()=>setCart([])} className="px-4 py-3 h-fit border border-gray-500 rounded-md flex justify-center items-center cursor-pointer hover:bg-red-500 hover:text-white mr-2"><h2>Clear All</h2></div>
                </div>
                }
                
                {cart.length > 0 && <div className="flex justify-center">
                    <button onClick={() => setPortal(true)} className="px-[5em] py-[1em] border mb-10 bg-[var(--button-bg)] text-[var(--button-text)] cursor-pointer text-2xl hover:bg-[var(--button-hover)] active:bg-[var(--button-active)]">Buy</button>
                </div>}
                {cart.length === 0 && <div className="flex w-full h-screen justify-center items-center">
                    <Link to="/shop"><h1 className="[@media(max-width:500px)]:text-3xl bold text-[var(--text-color)] text-5xl cursor-pointer">Nu sunt Produse în Coș</h1></Link>
                </div>}
                
            </div>
            <portalContext.Provider value={{setPortal}}>
                {portal && <Portal total={total}/>}
            </portalContext.Provider>
            <Feedback />
            <Footer />
        </>
    )
}