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
        if(this.props.props.b.someBool) {
            return (<div a={this.props.props.b}/>);
        } else {
            return (
                <form id={this.props.props.form.id} method={this.props.props.form.method} action={this.props.props.form.action} >
                    <GenericInput a={this.props.props.input1} b={this.props.props.b} /> 
                    <GenericInput a={this.props.props.input2} />
                    <Button a={this.props.props.button} inputs={{id1: this.props.props.input1.id, id2: this.props.props.input2.id}}/>    
                </form>
            );
        }
    }
}

export default LoginForm;