import '../../Styles/bootstrap.min.css'
import '../../Styles/estilos.css'

//comonents
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className="sticky-top">
            <ul className="nav nav-pills">
                <Link className="nav-item" to='/'>Inicio</Link>
                <Link className="nav-item" to='/recomendados'>Recomendados</Link>
                <Link className="nav-item" to='/nosotros'>Nosotros</Link>
                <li><CartWidget /></li>
                <li style={{color:'white', fontSize:50}}>Pritanorka</li>
            </ul>
        </nav>
    )
};

export default NavBar;