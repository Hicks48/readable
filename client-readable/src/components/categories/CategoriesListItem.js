import React from 'react'

import { Link } from 'react-router-dom'

class CategoriesListItem extends React.Component {

    render() {
        const { category } = this.props

        return (
            <li className='category-list-item'>
                <Link to={`/${category.name}`}>
                    <span className='badge badge-info'>{category.name}</span>
                </Link>
            </li>
        )
    }
}

export default CategoriesListItem