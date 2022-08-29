import React from 'react';
import Button from './Button';
class LifeCycleDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    componentWillMount() { console.log('Component WILL MOUNT!') }
    componentDidMount() { console.log('Component DID MOUNT!') }
    componentWillReceiveProps(newProps) { console.log('Component WILL RECIEVE PROPS!') }
    shouldComponentUpdate(newProps, newState) {
        if (this.state.count < 10) {
            return true;
        } else {
            return false;
        }
    }
    componentWillUpdate(nextProps, nextState) { console.log('Component WILL UPDATE!'); }
    componentDidUpdate(prevProps, prevState) { console.log('Component DID UPDATE!') }
    componentWillUnmount() { console.log('Component WILL UNMOUNT!') }

    handleClick = (operator) => {
        switch (operator) {
            case '-': this.setState({ count: this.state.count - 1 }); break;
            case '+': this.setState({ count: this.state.count + 1 }); break;
            default: this.setState({ count: 0 }); break;
        }
    };
    render() {
        return (
            <div className="container pt-3 text-center">
                <span>{this.state.count} </span>
                <Button className="btn btn-primary mx-3" label="Increase (+)" onClick={() => this.handleClick('+')} />
            </div>
        )
    }
}
export default LifeCycleDemo;