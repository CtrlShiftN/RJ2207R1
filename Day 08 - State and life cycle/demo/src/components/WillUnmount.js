import React from 'react';
import WillUnmountDemo from './WillUnmountDemo';
class WillUnmount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        };
    }

    delete = () => {
        this.setState({ display: false });
    };

    render() {
        let comp;
        if (this.state.display) {
            comp = <WillUnmountDemo />;
        }
        return (
            <div style={{ textAlign: 'center' }}>
                {comp}
                <button onClick={this.delete}>
                    Delete the component
                </button>
            </div>
        );
    }
}
export default WillUnmount;