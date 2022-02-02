import './bootstrap.min.css';
import ItemList from './ItemList/ItemList';

function ListContainer(props) {
    return(
        <div className='container'>
            <div className='row'>
                <ItemList />
            </div>            
        </div>    
    );
};

export default ListContainer;