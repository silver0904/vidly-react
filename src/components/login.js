import React from 'react'
import { connect } from 'react-redux'
import {Button, Form, FormGroup, Input, Label } from 'reactstrap';
import {URL} from '../var';
import {setAuth} from '../redux/action';
import {Redirect , Route, withRouter} from 'react-router-dom';
import Main from './main';

const _ = require('lodash');

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            email:"",
            password:""
        }
    }

    handleLogin = (event) =>{
        event.preventDefault();
        var queryURL = URL + "api/auth";
        return fetch(queryURL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({
                  email:this.state.email,
                  password:this.state.password
            })
        })
        .then ((response)=>{
            if (!response.ok) {throw response}
            else {
                console.log(response)
                return response.json()
            }
        })
        .then((json)=>{
            const auth = _.pick(json, ['_id', 'name', 'token']);
            this.props.setAuth(auth);
        })
        .catch((ex)=>{
            alert(ex.statusText);
        })
    }

    handleChange = event =>{   
        this.setState({
            [event.target.name]: event.target.value
        });
        
    };

    redirectMain(){
        if (this.props.Auth.token !== ""){
            console.log("hi");
            return <Redirect to="/main"/>
        }
    }

    render(){
        return(
            <div className="container">
                <h1>Vidly Movie Rental</h1>
                <Route path="/main" component={Main}/>
                {this.redirectMain()}
                <Form onSubmit={this.handleLogin}>
                    <FormGroup>
                        <Label htmlFor="email">Email</Label>
                        <Input type="text" id="email" name="email" required
                            value={this.state.email}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" name="password" required
                            value={this.state.password}
                            onChange={this.handleChange} />
                    </FormGroup>
                    <a>{this.state.errorLog}</a>
                    <Button type="submit" value="submit" color="primary">Login</Button>   
                </Form>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        setAuth: (auth)=> dispatch(setAuth(auth))
    }
}

const mapStateToProps = state=> {
    return {
        Auth : state.Auth
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));