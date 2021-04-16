import NavBar from "components/navbar"
import React, { Component} from "react"
import { Container, Form, Button } from "react-bootstrap"
import { Post } from "services/shared/api/Api";
import ApiActions from "services/shared/api/ApiActions"
import "./index.css"

export default class Register extends Component {
    state = {
        email: "",
        emailConfirm: "",
        password: "",
        passwordConfirm: "",
        displayName: "",
        biography: ""
    };

    async register(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries());

        const result = await Post(ApiActions.register, formDataObj);
        if (result.status === 200) {
            window.location.pathname = "/login";   
        }
        else{
            alert("Het ging fout");
        }

        return result;
    }

    changeHandler = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value}, () => {
             if (this.state.email !== "" && this.state.emailConfirm !== "" && this.state.password !== "" && this.state.passwordConfirm !== "") {
                 if(this.state.email === this.state.emailConfirm && this.state.password === this.state.passwordConfirm){
                     //Maak button enabler/disabler hier
                 }
             } 
        }); 
    }
    
    render() {
        return (
            <div className="register">
                <NavBar></NavBar>
                <Container className="registerContainer">
                    <h2>Register</h2>
                    <Form onSubmit={this.register} id="registerForm">
                    <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="What do we call you?" name="displayName" onChange={this.changeHandler} value={this.state.displayName}/>
                            <Form.Text className="text-muted">This name will be displayed to everyone.</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" name="email" onChange={this.changeHandler} value={this.state.email}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="email" placeholder="Confirm Email" name="emailConfirm" onChange={ this.changeHandler} value={this.state.emailConfirm}/>
                            <Form.Text className="text-muted">Your email will remain private to everyone in our database.</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={this.changeHandler} value={this.state.password}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Control type="password" placeholder="Confirm Password" name="passwordConfirm" onChange={this.changeHandler} value={this.state.passwordConfirm}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Biography</Form.Label>
                            <Form.Control type="textarea" placeholder="Tell us something about yourself" name="biography" onChange={this.changeHandler} value={this.state.biography}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Container>
            </div>
            )      
        } 
    }
