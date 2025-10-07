import {createContext, useState} from "react";

export const CartC = createContext();

export function CartContext({children}){
    const [cart, setCart] = useState([]);
    const [category, setCategory] = useState('all');

    const addProduct = (product) => {
        const exists = cart.find(item => item.id === product.id);
        setCart(prev =>{
            if(exists){
                return prev.map(item => item.id === product.id ? {...item, qty: item.qty + 1} : item)
            }
            return [...prev, {...product, qty: 1}]
    })};
    const increment = (product) => {
        setCart(prev => prev.map(item => item.id === product.id ? {...item, qty: item.qty + 1} : item))
    }
    const decrement = (product) => {
        setCart(prev => prev.map(item => item.id === product.id ? {...item, qty: item.qty - 1} : item).filter(item => item.qty > 0))
    }
    const SetareCategory = (category) => {
        setCategory(category)
    }
    const deleteProduct = (product) => {
        setCart(prev => prev.filter(item => item.id !== product.id))
    }


    return(

        <CartC.Provider value={{cart, addProduct, increment, decrement, SetareCategory, category, deleteProduct, setCart}}>
            {children}
        </CartC.Provider>
    )
}