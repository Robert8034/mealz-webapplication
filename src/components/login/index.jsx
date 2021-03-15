import NavBar from "components/navbar"
import React, { Component} from "react"
import { Container, Form, Button } from "react-bootstrap"
import { Post, Get } from "services/shared/api/Api";
import ApiActions from "services/shared/api/ApiActions"
import { setJwt } from "services/shared/cookie";
import "./index.css"

export default class Login extends Component {
    async login(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries());

        const result = await Post(ApiActions.login, formDataObj);
        if (result.status === 200) {
            const data = await result.text();
            await setJwt(data);
            const result2 = await Get(ApiActions.testGet);
            if (result2.status === 200) {
                console.log("Succes");
            }
            else console.log("Geen Succes 2")
        }
        else console.log("Geen succes");
    }

    render() {
        return (
            <div className="login">
                <NavBar></NavBar>
                <Container className="loginContainer">
                    <h2>Login</h2>
                    <Form onSubmit={this.login} id="loginForm">
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" name="email"/>
                            <Form.Text className="text-muted">Your email will remain private to everyone in our database.</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password"/>
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form>
                </Container>
            </div>
        )
    }
}