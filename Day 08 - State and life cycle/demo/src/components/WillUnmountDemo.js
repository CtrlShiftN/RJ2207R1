import React from 'react';
class WillUnmountDemo extends React.Component {
    componentWillUnmount() {
        alert('The component is going to be unmounted');
    }

    render() {
        return <h1>Hello Word!!!</h1>;
    }
}
export default WillUnmountDemo;