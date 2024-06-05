import { Link } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import Container from "./Container"

const Navbar = () => {

    const { setModo, modo } = useContext(ThemeContext)

    const handleClickModos = () => {
        if (modo === "oscuro") {
            setModo("claro")
        } else {
            setModo("oscuro")
        }
    }

    return (
        <Container>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/personajes">
                            Personajes
                        </Link>
                    </li>
                    <li>
                        <Link to="/contacto">
                            Contacto
                        </Link>
                    </li>
                </ul>
                <button onClick={handleClickModos}>
                    Cambiar modo
                </button>
            </nav>
        </Container>
    )
}

export default Navbar;