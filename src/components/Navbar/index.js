import CartWidget from "../CartWidget/index";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary mx-5">
            <h4>POTT.</h4>
            <div className="container-fluid justify-content-end">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="">Cuadros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Vajilla</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Decoracion</a>
                    </li>
                </ul>
            </div>
            
            <CartWidget/>
        </nav>
    )
}

export default Navbar