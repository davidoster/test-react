import React from 'react';
import './GenericInput.css';
class GenericInput extends React.Component {
    // 
// constructor(props) {
    //     // { id: "username", label: "Username", type: "text" }
    //     // console.log(props);
    //     super(props);
    // }
    render() {
        return (
            <div>
                <label htmlFor={this.props.a.id}>{this.props.a.label}: </label>
                <input id={this.props.a.id} type={this.props.a.type} />
            </div>
        );
    };
}

export default GenericInput;