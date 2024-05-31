import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        Lista de usuarios
                    </Link>
                </li>
                <li>
                    <Link to="/new-user">
                        Nuevo usuario
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;