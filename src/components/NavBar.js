import './bootstrap.css'
import './estilos.css'


const NavBar = () => {
    return(
        <nav className="sticky-top">
            <ul className="nav nav-pills">
                <li>Pritanorka</li>
                <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Recomendados</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Rebajas</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Nosotros</a></li>
            </ul>
        </nav>
    )
};

export default NavBar;