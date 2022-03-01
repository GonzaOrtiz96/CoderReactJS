import React, {useState} from 'react'
import '../../Styles/bootstrap.min.css';

//components
import MessageSuccess from '../MessageSuccess/MessageSuccess';

//fireBase
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { async } from '@firebase/util';

const initialState = {
    email: '',
    nombre: '',
    apellido: '',
    ciudad: '',
    telefono: '',
    items: {}
};

const Shop = ({cart}) => { 
    const [valores, setValores] = useState(initialState);
    const [compraID, setCompraID] = useState('');

    const onChange = (e) => {
        const {value, name} = e.target;
        setValores({...valores, [name]: value, items: cart});  
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        const docRef = await addDoc(collection(db, "compras"), {
            valores
        });
        setCompraID(docRef.id);
        setValores(initialState);
    }
    return (
        <div> 
            <form onSubmit={onSubmit}>
                <div className='align-items-center'>
                    <input onChange={onChange} value={valores.email} name='email' className='form-control' style={{margin:10, width:400}} type={'email'} placeholder='Ingrese su Email' />
                    <input onChange={onChange} value={valores.nombre} name='nombre' className='form-control' style={{margin:10, width:400}} type={'Name'} placeholder='Ingrese su Nombre' />
                    <input onChange={onChange} value={valores.apellido} name='apellido' className='form-control' style={{margin:10, width:400}} type={'LastName'} placeholder='Ingrese su Apellido' />
                    <input onChange={onChange} value={valores.ciudad} name='ciudad' className='form-control' style={{margin:10, width:400}} type={'City'} placeholder='Ingrese su Ciudad' />
                    <input onChange={onChange} value={valores.telefono} name='telefono' className='form-control' style={{margin:10, width:400}} type={'Number'} placeholder='Ingrese su Telefono' />
                    <div className='form-text'>No compartiremos esta informacion con nadie</div>
                    <button type='submit' className='btn btn-primary'>Enviar</button>
                    {compraID && <MessageSuccess compraID={compraID} />}
                </div>
            </form>
        </div>
    )
}

export default Shop