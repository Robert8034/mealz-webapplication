import NavBar from "components/navbar"
import React, { Component} from "react"

export default class Login extends Component {
    render() {
        return (
            <div className="login">
                <NavBar></NavBar>
                <h1>Login</h1>
            </div>
        )
    }
}