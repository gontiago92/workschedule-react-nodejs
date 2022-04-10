import React from 'react'
import './Button.sass'

function Button(props) {

    return (
        <div className='form-group'>
            <button className='button' {...props}>{props.children}</button>
        </div>
    )
}

export default Button