import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from "react-router-dom"
import { useContext } from 'react';
import { ExperienceContext } from './ExperienceContext';
export default function Feedback(){
    const {experience, setExperience} = useContext(ExperienceContext)
    return(
        <div className="grid grid-cols-3 [@media(max-width:1700px)]:grid-cols-2 [@media(mmax-width:1700px)]:grid-rows-2 bg-[var(--secondary-color)] sm:px-40 h-auto p-5 px-3">
            <div className="col-span-2 flex flex-col gap-4 [@media(max-width:1700px)]:justify-center [@media(max-width:1700px)]:mb-8 [@media(max-width:1700px)]:col-span-3">
                <h1 className="text-[var(--text-color)] font-bold text-2xl">Afla primul despre ofertele noastre exclusive.</h1>
                <form className="flex flex-col gap-4">
                    <div className="flex gap-4">
                        <input required className="sm:w-100 w-40 border border-white p-4 rounded-md" type="text" placeholder="Nume/Prenume"></input>
                        <input required className="sm:w-100 w-40 border border-white p-4 rounded-md" type="email" placeholder="Email"></input>
                    </div>
                    <div className="flex gap-4">
                        <input required className="sm:w-100 w-40 border border-white p-4 rounded-md" type="text" placeholder="Tel. ex: 079158820"></input>
                        <button type="submit" className="sm:w-100 w-40 py-[1em] border rounded-md bg-[var(--button-bg)] text-[var(--button-text)] cursor-pointer hover:bg-[var(--button-hover)] active:bg-[var(--button-active)]">Abonează-te</button>
                    </div>
                    <div className="flex gap-4 items-center">
                        <input className="w-6 h-6" type="checkbox" required></input>
                        <label>Sunt de acord cu <Link className="underline" to="/policy">politica de confidențialitate</Link></label>
                    </div>
                </form>
            </div>
            <div className='flex flex-col items-center justify-center gap-8 [@media(max-width:1700px)]:col-span-3'>
                <h1 className="text-2xl font-bold">Scrie-ne, laudă-ne sau fă o reclamație.</h1>
                <button className="border my-8 border-white sm:w-100 w-70 h-15 text-lg cursor-pointer hover:bg-white hover:text-black" onClick={()=>setExperience(true)}>Experiența ta contează</button>
                <div className="flex gap-8 text-[var(--text-color)]">

                    <a href="https://www.facebook.com" target='_blank'><FacebookIcon className="!cursor-pointer hover:text-blue-800" fontSize="large"/></a>
                    <a href="https://www.instagram.com/mhmsy34" target='_blank'><InstagramIcon className="!cursor-pointer hover:text-pink-600" fontSize="large"/></a>
                    <a href="https://www.youtube.com" target='_blank'><YouTubeIcon className="!cursor-pointer hover:text-red-600" fontSize="large"/></a>
                    <a href="https://www.telegram.com" target='_blank'><TelegramIcon className="!cursor-pointer hover:text-blue-600" fontSize="large"/></a>
                    <a href="https://www.twitter.com" target='_blank'><TwitterIcon className="!cursor-pointer hover:text-blue-600" fontSize="large"/></a>
                </div>
             </div>
        </div>
    )
}