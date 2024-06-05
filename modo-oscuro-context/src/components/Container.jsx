import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

const Container = ({ children }) => {

    const { modo } = useContext(ThemeContext)

    return(
        <div className={`${modo === "oscuro" ? "modo-oscuro" : "modo-claro"} container`}>
            {
                children
            }
        </div>
    )
}

export default Container