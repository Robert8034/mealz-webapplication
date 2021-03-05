import React, { Component} from "react"
import { Nav, Navbar } from "react-bootstrap"
import "./index.css"

export default class NavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" sticky="top">
                <Navbar.Brand href="../">
                    <img 
                    alt=""
                    src="https://s3-eu-west-1.amazonaws.com/mealz/promo/Mealz-logo-colour-square.png"
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    />{''}
                    </Navbar.Brand>
                <Nav>
                    <Nav.Item>
                        <Nav.Link href="../">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="login">Login</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="register">Register</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
        )
    }
}