import React, { Component } from 'react';

class HeadlineClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    increase = () => {

    }
    render() {
        console.log(this.props);
        console.log(this.state);
        return (
            <h1>Hello {this.state.count}</h1>
        )
    }
}
export default HeadlineClass;