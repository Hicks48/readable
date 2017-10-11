import React from 'react'

import { Link } from 'react-router-dom'

import FrontPageLink from '../FrontPageLink'

class NavigationBar extends React.Component {

    render() {
        return (
            <div>
                <FrontPageLink/>
                <nav className='navbar navbar-toggleable-md navbar-light bg-faded'>
                    <ul className='navbar-nav inline-list'>
                        <li className='nav-item inline-list side-margin'>
                            <Link className='nav-link inline-list' to='/'>Front Page</Link>
                        </li>
                        <li className='nav-item inline-list side-margin'>
                            <Link className='nav-link inline-list' to='/post/editornew/new'>New Post</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavigationBar