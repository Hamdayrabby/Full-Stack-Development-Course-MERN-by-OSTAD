import React from 'react'
import Child from './Child';

const Parent = (props) => {
    return (
        <div>
            <h1>I am {props.name}, {props.myFunc()}</h1>
            <Child name={props.name2} />
            <Child name="Robi" func={props.myFunc()} />
            <Child name="Auni" />
            <Child name="Naim" />
            <Child name="Tahajuddin" />
            <Child name="Alex" />
            <Child name="Alina" />
        </div>
    )
}

export default Parent;