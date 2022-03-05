import React from 'react';
import './Login.css';
import  GenericInput from '../generic-input/GenericInput.js';
import Button from '../button/Button.js';

class LoginForm extends React.Component {
    // constructor(props) {
    //     // console.log(props);
    //     super(props);
    // }

    inputIds() {
        return {id1: this.props.input1.id, id2: this.props.input2.id};
    }

    render() {
        if(this.props.b.someBool) {
            return (<div a={this.props.b}/>);
        } else {
            return (
                <form id={this.props.form.id} method={this.props.form.method} action={this.props.form.action} >
                    <GenericInput a={this.props.input1} b={this.props.b} /> 
                    <GenericInput a={this.props.input2} />
                    <Button a={this.props.button} inputs={this.props.input1.id}/>    
                </form>
            );
        }
    }
}

export default LoginForm;