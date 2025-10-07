import { createPortal } from "react-dom";
import CloseIcon from '@mui/icons-material/Close';
import { useContext, useState } from "react";
import { portalContext } from "./Cart"
import PayPal from '../assets/PayPal.png'
import Visa from '../assets/Visa.png'
import MasterCard from '../assets/card.png'

export default function Portal({children, total}) {
  const{ setPortal } = useContext(portalContext)
  const mountNode = document.getElementById("portal");
  const [pay, setPay] = useState('Visa');
  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="px-4 pb-6 w-1/2 h-auto bg-[var(--primary-color)] rounded-lg shadow-lg">
        <div className="flex justify-end"><CloseIcon className="translate-x-10 translate-y-[-40px] !cursor-pointer !text-white " onClick={() => setPortal(false)}/></div>
        <div className="flex flex-col gap-2 text-[var(--text-color)]">
          <h1 className="font-bold text-lg text-[var(--text-color)]">Payment Methods:</h1>
          <div className="flex items-center gap-2 ">
            <input onChange={(e) => setPay(e.target.value)} className="cursor-pointer w-5 h-5 appearance-none w-5 h-5 border border-gray-400 rounded-full 
         checked:bg-blue-500 checked:border-blue-500" type='radio' name='pay' value='Paypal'/><img className="w-5"src={PayPal}/>PayPal
          </div>
          <div className="flex  items-center gap-2">
            <input onChange={(e) => setPay(e.target.value)}  className="cursor-pointer w-5 h-5 appearance-none w-5 h-5 border border-gray-400 rounded-full 
         checked:bg-blue-500 checked:border-blue-500" type='radio' name='pay'value='MasterCard'/><img className="w-5"src={MasterCard}/>MasterCard
          </div>
          <div className="flex items-center gap-2">
            <input onChange={(e) => setPay(e.target.value)}  className="cursor-pointer w-5 h-5 appearance-none w-5 h-5 border border-gray-400 rounded-full 
         checked:bg-blue-500 checked:border-blue-500" type='radio' defaultChecked value='Visa' name='pay'/><img className="w-5"src={Visa}/>Visa
          </div>
        </div>
        <form action="/success" className="text-[var(--text-color)]">
          {(pay === 'Visa' || pay === 'MasterCard') && <div className="flex flex-col gap-4 mt-4">
            <input required className="p-2 rounded-md bg-[var(--bg-color)] text-[var(--text-color)] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="number" placeholder="Card Number"/>
            <input required className="p-2 rounded-md bg-[var(--bg-color)] text-[var(--text-color)] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="text" placeholder="Full Name"/>
            <div className="flex gap-4">
              <input required className="p-2 rounded-md bg-[var(--bg-color)] text-[var(--text-color)] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="number" placeholder="Exp. Date"/>
              <input required className="p-2 rounded-md bg-[var(--bg-color)] text-[var(--text-color)] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="number" placeholder="CVV"/>
            </div>
            <h1 className="font-bold text-3xl">Total: {total.toFixed(2)}$</h1>
            <button className="py-[0.5em] border bg-[var(--button-bg)] text-[var(--button-text)] cursor-pointer text-2xl hover:bg-[var(--button-hover)] active:bg-[var(--button-active)]">Pay</button>
          </div>}
          {pay === 'Paypal' && <div className="flex flex-col gap-4 mt-4">
            <input required className="p-2 rounded-md bg-[var(--bg-color)] text-[var(--text-color)] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="email" placeholder="Email"/>
            <input required className="p-2 rounded-md bg-[var(--bg-color)] text-[var(--text-color)] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="password" placeholder="Password"/>
            <h1 className="font-bold text-3xl">Total: {total.toFixed(2)}$</h1>
            <button className="py-[0.5em] border bg-[var(--button-bg)] text-[var(--button-text)] cursor-pointer text-2xl hover:bg-[var(--button-hover)] active:bg-[var(--button-active)]">Pay</button>
          </div>}
        </form>
      </div>
    </div>,
    mountNode
  );
}
