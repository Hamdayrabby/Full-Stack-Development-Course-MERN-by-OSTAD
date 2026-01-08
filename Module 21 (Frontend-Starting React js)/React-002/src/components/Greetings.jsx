import React from 'react'

const Greetings = ({ person = "Player", location, jersey, button }) => {
    return (
        <div>

            <h1>Hello {person}, {location},  jersey = {jersey}</h1>
            <button onClick={() => button(person)}>Click me</button>


        </div>
    )
}

export default Greetings