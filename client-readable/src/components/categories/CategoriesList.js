import React from 'react'

import CategoriesListItem from './CategoriesListItem'

class CategoriesList extends React.Component {

    render() {
        const { categories } = this.props

        return (
            <div className='container'>
                <h2>Categories:</h2>
                <ul className='category-list'>
                    {categories.map((category) => (
                        <CategoriesListItem key={category.path} category={category}/>
                    ))}
                </ul>
            </div>
        )
    }
}

export default CategoriesList