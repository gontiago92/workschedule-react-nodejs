import React from 'react'

function Input(props) {
  return (
    <div className='input-field'>
      <label htmlFor={props.id}>{props.placeholder}</label>
      <input type={props.type ? props.type : "text"} {...props} />
    </div>
  )
}

export default Input