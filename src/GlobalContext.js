import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

const getInitialDarkMode = () => {
    const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;

    const storedDarkMode = localStorage.getItem("darkMode");

    if (storedDarkMode === null) {
        return prefersDarkMode;
    }

    return storedDarkMode === "true";
};

export const AppProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode());
    const [searchTerm, setSearchTerm] = useState("cat");

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem("darkMode", newMode);
    };

    useEffect(() => {
        const body = document.querySelector("body"); // document.body.classList.toggle()
        body.classList.toggle("dark-theme", isDarkMode);
    }, [isDarkMode]);

    return (
        <AppContext.Provider
            value={{ isDarkMode, toggleDarkMode, searchTerm, setSearchTerm }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};
