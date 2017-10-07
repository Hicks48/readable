import React from 'react'

class PostForm extends React.Component {

    constructor(props) {
        super(props)

        const { post } = this.props
        this.state = post

        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleCategoryChange = this.handleCategoryChange.bind(this)
        this.handleAuthorChange = this.handleAuthorChange.bind(this)
        this.handleBodyChange = this.handleBodyChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps.post)
    }

    handleTitleChange(event) {
        this.setState({ ...this.state, title: event.target.value })
    }

    handleCategoryChange(event) {
        this.setState({ ...this.state, category: event.target.value })
    }

    handleAuthorChange(event) {
        this.setState({ ...this.state, author: event.target.value })
    }

    handleBodyChange(event) {
        this.setState({ ...this.state, body: event.target.value })
    }

    handleOnSubmit(event) {
        const { submitPost, history } = this.props
        event.preventDefault()
        submitPost(this.state)
        history.goBack()
    }

    render() {
        const { categories } = this.props

        return (
            <div className='container'>
                <form onSubmit={this.handleOnSubmit}>
                    <div className='form-group'>
                        <label>Title:</label>
                        <input
                            type='text'
                            className='form-control'
                            value={this.state.title}
                            onChange={this.handleTitleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Category:</label>
                        <select 
                            className='form-control'
                            value={this.state.category}
                            onChange={this.handleCategoryChange}
                        >
                            <option>none</option>
                            {categories.map((category) => (
                                <option key={category.name}>{category.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className='form-group'>
                        <label>Author:</label>
                        <input
                            type='text'
                            className='form-control'
                            value={this.state.author}
                            onChange={this.handleAuthorChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Body:</label>
                        <textarea 
                            type='text'
                            className='form-control'
                            value={this.state.body}
                            onChange={this.handleBodyChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm