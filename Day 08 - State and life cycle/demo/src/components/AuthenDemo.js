import React from 'react';
import Button from './Button';
class AuthenDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
    }
    handleClick = () => {
        this.setState({ isLoggedIn: !this.state.isLoggedIn });
    }
    render() {
        // console.log(this.state.isLoggedIn);
        if (this.state.isLoggedIn) {
            return (
                <div className='container text-center'>
                    <h1>Welcome</h1>
                    <Button onClick={this.handleClick} label='Logout' />
                </div>
            )
        } else {
            return (
                <div className='container text-center'>
                    <h1>Please Log in</h1>
                    <Button onClick={this.handleClick} label='Log in' />
                </div>
            )
        }
    }
}
export default AuthenDemo;