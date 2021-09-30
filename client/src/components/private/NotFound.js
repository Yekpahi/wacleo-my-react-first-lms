import React from 'react'

const NotFound = (props) => {
    setTimeout(() => {
        props.history.push('/')
    }, 5000)
    return (
        <div>
            404 | Not Found
        </div>
    )
}

export default NotFound
