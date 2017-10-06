import React from 'react'

class CommentForm extends React.Component {

    defaultState = {
        author: '',
        body: '',
    }

    constructor(props) {
        super(props)

        this.state = { ...this.defaultState }

        this.handleAuthorChange = this.handleAuthorChange.bind(this)
        this.handleBodyChange = this.handleBodyChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.comment) {
            this.setState({ ...nextProps.comment })
        }
    }

    handleAuthorChange(event) {
        this.setState({ ...this.state, author: event.target.value })
    }

    handleBodyChange(event) {
        this.setState({ ...this.state, body: event.target.value })
    }

    onFormSubmit(event) {
        const { onCommentSubmit, onClose } = this.props
        const comment = this.state

        event.preventDefault()
        this.setState({ ...this.defaultState })

        onClose()
        onCommentSubmit(comment)
    }

    render() {
        const { modalVisible, onClose } = this.props

        return (
            <div className={`comment-form-modal ${modalVisible ? 'modal-visible' : 'modal-invisible' }`}>
                <div className='container'>
                    <form className='comment-form' onSubmit={this.onFormSubmit}>
                        <h4>Comment Form:</h4>
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
                        <button 
                            type="button" 
                            className="btn btn-info side-margin"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default CommentForm