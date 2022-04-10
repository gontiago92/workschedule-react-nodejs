import React from 'react'

import './CheckBox.sass'

const CheckBox = (props) => {
  return (
    <label className='checkbox_container'>
        <input type="checkbox" id={props.name} {...props} />
        <div className="checkbox">
            <i className="fa fa-check"></i>
        </div>
        {props.label}
    </label>
  )
}

export default CheckBox