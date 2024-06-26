import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DataFirebaseContext } from "../context/DataFirebaseContext";

const NavBar = () => {
    const navigate = useNavigate()
    const { dataCart } = useContext(DataFirebaseContext);

    const handleClickCart = () => {
        navigate("/cart")
    }

   
    return (
        <>
            <ul>
                <li>
                    <Link to="/productos/:categoria">
                        Products
                    </Link>
                </li>
                <li>
                    <button
                    onClick={handleClickCart}
                    >
                        Carrito { dataCart.length }
                    </button>
                </li>
            </ul>
        </>
    )
}

export default NavBar;