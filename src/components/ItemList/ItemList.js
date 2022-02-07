import Item from '../Item/item';
import '../../Styles/bootstrap.min.css';

const ItemList = ({datos}) =>{
    return(
        <div className='card col'>
            {datos.map((info) =>{
                return (
                    <div key={info.id}>
                        <Item data={info}/>
                    </div>
                )
            })}
        </div>
    );
};

export default ItemList;