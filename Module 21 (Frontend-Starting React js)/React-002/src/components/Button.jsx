import React from 'react'

const Button = ({ text = "Button", onClick = () => { console.log("Button clicked") }, styles = { backgroundColor: "Green", color: "white" } }) => {
    return (
        <button onClick={onClick} style={styles}>{text}</button>
    )
}

export default Button