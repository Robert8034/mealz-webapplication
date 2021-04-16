import { Component } from "react";
import { Button, Container } from "react-bootstrap";
import Cookies from "universal-cookie"
import { Nav, Navbar } from "react-bootstrap"
import "./index.css"

export default class TimelineTop extends Component {
    checkLogin = () => {
        if (new Cookies().get("Jwt") !== undefined) {
            return (
                <div id="timelineTop">
                   <Button variant="dark" size="lg" block onClick={this.postPage}>Post A Recipe!</Button> 
                </div>
            )
        }
        else {
            return(
                <div id="empty"></div>
            )
        }
    }

    postPage = () => {
        window.location.pathname = "/createPost";
    }
    
    render() {
        return this.checkLogin();
    }
}