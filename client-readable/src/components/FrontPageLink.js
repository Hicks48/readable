import React from 'react'
import { Link } from 'react-router-dom'

class FrontPageLink extends React.Component {

    render() {
        return (
            <h1><Link to='/'>Readable App</Link></h1>
        )
    }
}

export default FrontPageLink