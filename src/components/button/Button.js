import React from 'react';

class Button extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
    }
  
    submit = ((event) => {
      event.preventDefault();
      let username = document.getElementById(this.props.inputs.id1).value;
      let password = document.getElementById(this.props.inputs.id2).value;
      console.log(username, password);
    });
  
    render() {
      return (
          <button onClick={this.submit} className="btn btn-info">{ this.props.a.textEN } </button>
      );
    }
  }

  export default Button;