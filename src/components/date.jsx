import {createContext, useState, useEffect, useRef} from "react";
import CircularProgress from '@mui/material/CircularProgress';
export const DateContext = createContext();

export default function Date( {children} ) {
const [date, setDate] = useState([]);
const [allCategory, setAllCategory] = useState([])
const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {

    fetch("https://dummyjson.com/products?limit=100")
    .then(r => r.json())
    .then(({ products }) => {
        
        const Initial = products.map(p => ({
            ...p,
            initialPrice: Number((p.price/100*p.discountPercentage + p.price).toFixed(2))
        }))
        setDate(Initial)
    })
    .catch(err => setError(err.message))
    .finally(() => setIsLoading(false));
}, []);

useEffect(() => {
      fetch("https://dummyjson.com/products?limit=100")
        .then(r => r.json())
        .then(({ products }) => {
            const uniqueCategories = {};

            products.forEach(p => {
              if (!uniqueCategories[p.category]) {
                uniqueCategories[p.category] = {
                  category: p.category,
                  image: p.images[0]
                };
              }
            });
            
            setAllCategory(Object.values(uniqueCategories));
        })
        .catch(err => setError(err.message))
        .finally(() => setIsLoading(false));
  }, []);

if (isLoading) return(
    <div className="flex justify-center items-center h-screen">
        <CircularProgress />
    </div>
)
if (error) return(
    <div className="flex justify-center items-center h-screen">
        <p>Error: {error}</p>
    </div>
)
return(
    <DateContext.Provider value={{date, allCategory}}>
        {children}
    </DateContext.Provider>
)}