import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './Navbar.css';


const Navbar = () => {
    return (
        <header className="navbar navbar-expand-lg bg-body-tertiary px-5">
            <div className="container-fluid">
                <Link className="navbar-brand brandContainer" to ="/" >
                    <img src="./logo.ico" className="logoNavbar" alt=""></img>
                    <h4>POTT.</h4>
                </Link>

                <nav>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li>
                            <NavLink  to={`/category/tazas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' } >Tazas</NavLink>
                        </li>

                        <li>
                        <NavLink to={`/category/bowls`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' } >Bowls</NavLink>
                        </li>

                        <li>
                            <NavLink  to={`/category/floreros`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' } >Floreros</NavLink>
                        </li>

                        <li>
                        <NavLink to={`/category/platos`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' } >Platos</NavLink>
                        </li>
                        
                    </ul>
                    
                    
                </nav>
            </div>
            
            
            
            <CartWidget/>
        </header>
    )
}

export default Navbar