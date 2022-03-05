import React from 'react';

class Button extends React.Component {
    constructor(props) {
      super(props);
      this.state = { liked: false };
    }
  
    submit(event) {
      event.preventDefault();
      console.log(this);
      // console.log(this.props.inputIds().id1);
      // let username = document.getElementById(this.getState.username);
      // let password = document.getElementById("password");
      // alert(username.value);
      // alert(password.value);
    }
  
    render() {
      return (
          <button onClick={this.submit} className="btn btn-info">{ this.props.a.textEN } </button>
      );
    }
  }

  export default Button;