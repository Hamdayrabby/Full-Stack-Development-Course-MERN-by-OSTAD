import React from 'react'
import '../index.css'
const Child = (props) => {
    return (
        <div className='border'>
            <h1>This is {props.name} {props.func}</h1>
        </div>
    )
}

export default Child