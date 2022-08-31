import React from 'react';
import Button from './Button';
import InputBS from './InputBS';
class AuthenDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            form: {
                email: '',
                password: ''
            }
        };
    }
    handleLogout = () => {
        this.setState({ isLoggedIn: false });
    }
    handleChange = (e) => {
        this.setState((state) => {
            const { form } = this.state;
            form[e.target.name] = e.target.value
            return { form }
        });
    }
    handleSubmit = (e) => {
        const { email, password } = this.state.form;
        if (email === "admin@gmail.com" && password === "admin") {
            this.setState({ isLoggedIn: true });
        }else{
            alert("Please enter a valid email or password");
        }
    }
    render() {
        // console.log(this.state.isLoggedIn);
        const { isLoggedIn, form } = this.state;
        if (this.state.isLoggedIn) {
            return (
                <div className='container text-center'>
                    <h1>Welcome</h1>
                    <Button onClick={this.handleLogout} label='Logout' />
                </div>
            )
        }
        return (
            <div className="container align-items-center text-center pt-4">
                <div className="form-signin">
                    <form onSubmit={this.handleSubmit}>
                        <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" width="72" height="57" />
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                        <InputBS classDivName="form-floating" className="form-control" type="email" placeholder="name@example.com" name="email" value={form.email} onChange={this.handleChange} label="Email address" />
                        <InputBS classDivName="form-floating" className="form-control" type="password" name="password" value={form.password} onChange={this.handleChange} label="Password" />
                        <br />
                        <Button className="w-100 btn btn-lg btn-primary" type="button" label="Sign in" />
                        <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
                    </form>
                </div>
            </div>
        )
    }
}
export default AuthenDemo;