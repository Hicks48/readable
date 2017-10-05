import React from 'react'

class TimestampSpan extends React.Component {

    getTimeString = (date) => {
        const hours = this.intoTwoNumbers(date.getHours())
        const minutes = this.intoTwoNumbers(date.getMinutes())
        const seconds = this.intoTwoNumbers(date.getSeconds())

        return `${hours}:${minutes}:${seconds}`
    }

    getDateString = (date) => {
        const day = this.intoTwoNumbers(date.getDate())
        const month = this.intoTwoNumbers(date.getMonth())
        const year = date.getFullYear()

        return `${day}.${month}.${year}`
    }

    intoTwoNumbers = (number) => (
        number < 10 ? `0${number}` : `${number}`
    )

    render() {
        const { timestamp } = this.props
        const date = new Date(timestamp)

        return (
            <span>
                {this.getTimeString(date)}
                &nbsp;
                {this.getDateString(date)}
            </span>
        )
    }
}

export default TimestampSpan