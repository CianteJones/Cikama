import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React, { Component }  from 'react';
import { Input } from '@material-ui/core';
import { FormLabel } from '@material-ui/core';

class Login extends Component {

  constructor(props){
    super(props);
    this.state={
    zipcode:''
    }
   }

  handleClick(event){
    console.log("CLICK");
    // var apiBaseUrl = "http://localhost:4000/api/";
    // var self = this;
    // var payload={
    // "email":this.state.username,
    // "password":this.state.password
    // }
    // axios.post(apiBaseUrl+'login', payload)
    // .then(function (response) {
    // console.log(response);
    // if(response.data.code == 200){
    // console.log("Login successfull");
    // var uploadScreen=[];
    // uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
    // self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
    // }
    // else if(response.data.code == 204){
    // console.log("Username password do not match");
    // alert("username password do not match")
    // }
    // else{
    // console.log("Username does not exists");
    // alert("Username does not exist");
    // }
    // })
    // .catch(function (error) {
    // console.log(error);
    // });
  }

  render() {
    return (
      <div class="centered">
        <p><Input label="zipcode" type="text" name="zipcode" id="zipcode" placeholder="Enter zipcode"></Input></p>
      </div>
    );
  }
}

export default Login;