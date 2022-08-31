import React from 'react';
class Input extends React.Component{
    render(){
        return (
            <input className={this.props.className} type={this.props.type} onChange={this.props.onChange} placeholder={this.props.placeholder}></input>
        );
    }
}

export default Input;