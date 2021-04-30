import { Component } from "react";
import { Button } from "react-bootstrap";
import { Get } from "services/shared/api/Api";
import Cookies from "universal-cookie"
import ApiActions from "services/shared/api/ApiActions";
import "./index.css"

export default class TimelineTop extends Component {
    constructor() {
        super();
        this.state = {
            role: ""
        }
    }
    checkLogin = () => {
        if ((new Cookies().get("Jwt") !== undefined) && (this.state.role === "Chef" || this.state.role === "Moderator" || this.state.role === "Admin")) {
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

    async componentDidMount() {
        const result = await Get(ApiActions.getRole);
        if (result.status === 200) {
            var role = await result.text();
            this.setState({role: role});
        }
    }
    
    render() {
        return this.checkLogin();
    }
}