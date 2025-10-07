import {createContext, useState} from "react";
export const ExperienceContext = createContext();
export default function ExperienceProvider({children}){
    const [experience, setExperience] = useState(false);

    return(
        <ExperienceContext.Provider value={{experience, setExperience}}>
            {children}
        </ExperienceContext.Provider>
    )
}