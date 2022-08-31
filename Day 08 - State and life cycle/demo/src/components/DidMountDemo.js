import React from 'react';
class DidMountDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: '#000000' };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ color: '#FF0000' });
        }, 5000);
    }
    render() {
        return (
            <div
                style={{
                    backgroundColor: this.state.color,
                    paddingTop: 20,
                    width: 400,
                    height: 80,
                    margin: 'auto'
                }}
            />
        )
    }
}
export default DidMountDemo;