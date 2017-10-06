import React from 'react'

class CommentForm extends React.Component {

    defaultState = {
        author: '',
        body: '',
        modalVisible: false
    }

    constructor(props) {
        super(props)

        this.state = { ...this.defaultState }

        this.handleAuthorChange = this.handleAuthorChange.bind(this)
        this.handleBodyChange = this.handleBodyChange.bind(this)
        this.onClose = this.onClose.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.comment) {
            this.setState({ ...nextProps.comment, modalVisible: nextProps.modalVisible })
        } else {
            this.setState({ ...this.state, modalVisible: nextProps.modalVisible })
        }
    }

    handleAuthorChange(event) {
        this.setState({ ...this.state, author: event.target.value })
    }

    handleBodyChange(event) {
        this.setState({ ...this.state, body: event.target.value })
    }

    onClose() {
        this.setState({ ...this.state, modalVisible: false })
    }

    onFormSubmit(event) {
        const { onCommentSubmit } = this.props
        const { author, body } = this.state

        event.preventDefault()
        onCommentSubmit({ author, body })
        this.setState({ ...this.defaultState })
    }

    render() {
        const { modalVisible } = this.state

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
                            onClick={this.onClose}
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