import '../../Styles/bootstrap.min.css';

//components
import { Link } from 'react-router-dom';
import Item from '../Item/item';

const ItemList = ({datos}) =>{
    return(
        <div className='card col'>
            {datos.map((info) =>{
                return (
                    <div key={info.id}>
                        <Link to={`/detail/${info.id}`}>
                            <Item data={info}/>
                        </Link>
                        
                    </div>
                )
            })}
        </div>
    );
};

export default ItemList;