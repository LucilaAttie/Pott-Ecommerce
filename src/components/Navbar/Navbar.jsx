// import { NavLink, Link } from "react-router-dom";
// import CartWidget from "../CartWidget/CartWidget";
// import './Navbar.css';

// const Navbar = () => {
//     return (
//         <header className="navbar navbar-expand-lg navbar-light bg-light px-5">
//             <div className="container-fluid">
//                 <Link className="navbar-brand" to="/">
//                     <img src="./logo.ico" className="logoNavbar" alt="" />
//                     <h4>POTT.</h4>
//                 </Link>

//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>

//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav ms-auto">
//                         <li className="nav-item">
//                             <NavLink to={`/category/tazas`} className="nav-link">Tazas</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink to={`/category/bowls`} className="nav-link">Bowls</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink to={`/category/floreros`} className="nav-link">Floreros</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink to={`/category/platos`} className="nav-link">Platos</NavLink>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//             <CartWidget />
//         </header>
//     )
// }

// export default Navbar;

import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light px-5">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="./logo.ico" className="logoNavbar" alt="" />
                    <h4>POTT.</h4>
                </Link>

                <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={"collapse navbar-collapse" + (isOpen ? " show" : "")} id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <NavLink to={`/category/tazas`} className="nav-link">Tazas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/category/bowls`} className="nav-link">Bowls</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/category/floreros`} className="nav-link">Floreros</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/category/platos`} className="nav-link">Platos</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="ms-auto">
                    <CartWidget />
                </div>
            </div>
        </header>
    )
}

export default Navbar;




