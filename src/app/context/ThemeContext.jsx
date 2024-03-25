"use client";

import { createContext, useEffect, useState } from "react";


export const ThemeContext = createContext();

const getFromLocalStorage = ()=>{
    if(typeof window !== undefined){
        const value = localStorage.getItem("theme");
        return value || "light";
    }
};

export const ThemeContextProvider = ({children})=>{
    const [theme,setTheme] = useState(()=>{
        return getFromLocalStorage();
    });

    //to toggle between light and dark
    const toggle = () => {
        setTheme(theme ==="light" ? "dark":"light");
    };

    //to update the same in local storage
    useEffect(()=>{
        localStorage.setItem("theme",theme);
    },{theme});

    return <ThemeContext.Provider value={{theme , toggle}}>{children}</ThemeContext.Provider>;
};


