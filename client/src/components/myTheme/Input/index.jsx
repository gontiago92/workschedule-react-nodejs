import React from 'react'
import './Input.sass'
function Input(props) {

    return (
        <div className='form-group'>
            <label className='input' htmlFor={props.name}>
                <span>{props.label}</span>
                <input id={props.name} type={props.type ? props.type : "text"} {...props} />
            </label>
        </div>
    )
}

export default Input