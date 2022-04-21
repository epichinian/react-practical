import React, { Component } from 'react'

export default class CountClick extends Component {

    constructor(props){
        super(props)
        this.state = {
            counts: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState((state) => ({
            counts: state.counts + 1
        }))
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.counts}</p>
                <p>
                    <button onClick={this.handleClick}>Click Me!</button>
                </p>
            </div>
        )
    }
}
