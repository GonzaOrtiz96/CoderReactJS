import '../../Styles/bootstrap.min.css'
import '../../Styles/estilos.css'
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
    return(
        <nav className="sticky-top">
            <ul className="nav nav-pills">
                <li className="nav-item"><a className="nav-link" href="#">Inicio</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Recomendados</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Rebajas</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Nosotros</a></li>
                <li><CartWidget /></li>
                <li style={{color:'white', fontSize:50}}>Pritanorka</li>
            </ul>
        </nav>
    )
};

export default NavBar;