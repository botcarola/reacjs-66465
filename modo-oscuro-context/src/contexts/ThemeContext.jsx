import { createContext, useState } from "react";

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
    const [ modo, setModo ] = useState("oscuro")

    console.log(modo)

    return (
        <ThemeContext.Provider value={{ modo, setModo }}>
            {-
                children
            }
        </ThemeContext.Provider>
    )
}

export { ThemeContext, ThemeProvider } 