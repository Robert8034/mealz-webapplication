import React, { Component} from "react"
import { Nav, Navbar } from "react-bootstrap"
import { unsetJwt } from "services/shared/cookie"
import Cookies from "universal-cookie"
import "./index.css"

export default class NavBar extends Component {
    checkLogin = () => {

        if (new Cookies().get("Jwt") !== undefined) {
            return(
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
                        <Nav.Link onClick={this.logout}>Logout</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="register">Register</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="account">Account</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar>
            )
        }
        else {
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

    async logout() {
        await unsetJwt();
        window.location.pathname = "/login";
    }

    render() {
        return this.checkLogin();
    }
}