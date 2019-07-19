import React from 'react'
import {Button, Form, FormGroup, Input, Label } from 'reactstrap';
import {URL} from '../var';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            email:"",
            password:"",
            errorLog:[]
        }
        
    }

    handleLogin = event=> {
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
            if (!response.ok) {throw response.statusText}
            else alert(response.body);
        })

        .catch((ex)=>{
            alert(ex);
        })
        
        
        
        
    }

    handleChange = event =>{   
        this.setState({
            [event.target.name]: event.target.value
        });
        
    };

    render(){
        return(
            <div className="container">
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

export default Login;