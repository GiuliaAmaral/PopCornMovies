import { Link } from "react-router-dom";
import { MdHome, MdFavorite } from "react-icons/md";
import { GiPopcorn } from "react-icons/gi";



export default function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                <div className="container-fluid">
                    <h3 className="navbar-brand"><GiPopcorn style={{fontSize: '2rem'}}/> PopCorn & Movies</h3>

                    <div className="collapse navbar-collapse show active-mobile-baixo" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-link active" aria-current="page"><MdHome style={{fontSize: '2rem'}}/> Inicio</Link>
                            <Link to="/favoritos" className="nav-link active" aria-current="page"><MdFavorite style={{fontSize: '2rem'}}/> Favoritos</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )



}