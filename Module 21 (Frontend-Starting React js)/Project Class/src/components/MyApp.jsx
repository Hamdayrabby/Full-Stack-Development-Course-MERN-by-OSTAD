import React from 'react'
import First from './First';
const MyApp = ({ name, age }) => {
    //console.log(props.name);

    //const { name, age } = props; //object destructing
    return (
        <div className="border">
            <h1>This is MyApp</h1>
            <h2>Name: {name}</h2>
            <h2>Age: {age}</h2>
            <First />
            <First />
            <First />
            <First />

        </div>
    )
}

export default MyApp