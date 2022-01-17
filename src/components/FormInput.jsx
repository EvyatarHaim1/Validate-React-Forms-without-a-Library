import React from 'react';
import './FormInput.css';

function FormInput(props) {
    return (
        <div className="formInput">
            <label>Username</label>
            <input type="text" placeholder={props.placeholder} ref={props.ref}/>
        </div>
    )
}

export default FormInput
