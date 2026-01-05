import React from 'react'

const First = ({ brand = "Samsung" }) => {//set default props value. It will show all the components.
    return (
        <div>
            {/* this props value only show on the parent component */}
            <h1>This is the {brand}</h1>


        </div>
    )
}

export default First;