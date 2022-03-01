import React from 'react'
import '../../Styles/bootstrap.min.css';

const MessageSuccess = ({compraID}) => {
    return (
        <div className='m-4'>
            <div className='alert alert-success alert-dismissible fade show'>
                <strong>¡Exito!</strong> Su compra ha sido registrada. Su codigo de compra es: {compraID}.
                <button type='button' className='btn-close' data-bs-dismiss='alert' />
            </div>
        </div>
    )
}

export default MessageSuccess;