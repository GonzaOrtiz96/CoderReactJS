import './bootstrap.min.css';
import img from '../media/img1.jpeg';

function ListContainer(props) {
    return(
        <div className="card">
        {/* <img src={`../media/`+props.img} className="card-img-top" /> esta era mi idea par poder aprovechar los props pero logre q funcione */}
        <img src={img} alt="imagenALT" className="card-img-top" />
        <div className="card-body">
            <h5 className="card-title">{props.titulo}</h5>
            <p>{props.cuerpo}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    );
};

export default ListContainer;