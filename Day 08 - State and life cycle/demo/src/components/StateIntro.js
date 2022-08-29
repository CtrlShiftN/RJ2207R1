import React from "react";
class StateIntro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'admin',
            password: 'password'
        };
    }
    handleChange = (event) => {
        this.setState({ username: 'user' }); 
    }
    render() {
        return (
            <div className="container">
                {this.state.username} - {this.state.password}
                <br />
                <button onClick={this.handleChange}>Change name</button>
            </div>
        )
    }
}

export default StateIntro;